<?php

namespace App\Console\Commands;

use App\Models\Meal;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

class GetFood extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:get-food';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get all menus and store in database';

    protected $cache_file = 'token_cache.json';
    // insert new food ids here
    protected $food_ids = [3436, 33797];

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $token = $this->generateToken();

        foreach ($this->food_ids as $food_id) {
            $client = new Client();
            $response = $client->get("https://platform.fatsecret.com/rest/server.api", [
                'form_params' => [
                    'method' => 'food.get.v4',
                    'food_id' => $food_id,
                    'format' => 'json',
                    'include_food_images' => 'true'
                ],
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                    'Content-Type' => 'application/x-www-form-urlencoded'
                ]

            ]);

            $body = $response->getBody();
            $data = json_decode($body, true);

            $serving = $data['food']['servings']['serving'][0];
            $image_url = $data['food']['food_images']['food_image'][0]['image_url'];

            $image_uuid = Uuid::uuid5(Uuid::NAMESPACE_X500, $data['food']['food_id']);

            $image = file_get_contents($image_url);
            file_put_contents(storage_path() . '/app/public/Meals/'. $image_uuid. '.png', $image);

            Meal::updateOrCreate([
                'food_api_id' => $data['food']['food_id']
            ], [
                'name' => $data['food']['food_name'],
                'calories' => $serving['calories'],
                'carbohydrate' => $serving['carbohydrate'],
                'protein' => $serving['protein'],
                'fat' => $serving['fat'],
                'saturated_fat' => $serving['saturated_fat'],
                'polyunsaturated_fat' => $serving['polyunsaturated_fat'],
                'monounsaturated_fat' => $serving['monounsaturated_fat'],
                'cholesterol' => $serving['cholesterol'],
                'sodium' => $serving['sodium'],
                'potassium' => $serving['potassium'],
                'fiber' => $serving['fiber'],
                'sugar' => $serving['sugar'],
                'vitamin_a' => $serving['vitamin_a'],
                'vitamin_c' => $serving['vitamin_c'],
                'calcium' => $serving['calcium'],
                'iron' => $serving['iron'],
                'image_id' => $image_uuid
            ]);
        }
    }

    public function generateToken() {
        $client_id = getenv('OAUTH_CLIENT_ID');
        $client_secret = getenv('OAUTH_CLIENT_SECRET');

        if (file_exists($this->cache_file)) {
            $cached_data = json_decode(file_get_contents($this->cache_file), true);
            $current_time = time();

            if (isset($cached_data['access_token']) && $cached_data['expires_at'] > $current_time) {
                // Token is valid, use cached token
                echo 'Using cached token.';
                return $cached_data['access_token'];
            }
        }

        try {
            $client = new Client();
            $response = $client->post("https://oauth.fatsecret.com/connect/token", [
                'form_params' => [
                    'grant_type' => 'client_credentials',
                    'scope' => 'premier'
                ],
                'headers' => [
                    'Authorization' => 'Basic ' . base64_encode("$client_id:$client_secret"),
                    'Content-Type' => 'application/x-www-form-urlencoded'
                ]
            ]);

            $body = $response->getBody();
            $data = json_decode($body, true);

            if (isset($data['access_token'])) {
                $expires_in = $data['expires_in']; // Typically in seconds
                $cached_data = [
                    'access_token' => $data['access_token'],
                    'expires_at' => time() + $expires_in
                ];

                file_put_contents($this->cache_file, json_encode($cached_data));

                echo 'New access token generated';
                return $cached_data['access_token'];
            } else {
                echo 'Failed to retrieve token.';
                return null;
            }
        } catch (RequestException $e) {
            echo 'Request failed: ' . $e->getMessage();
            return null;
        }
    }
}
