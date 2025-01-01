<?php

namespace App\Console\Commands;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Console\Command;

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

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $token = $this->generateToken();
        $client = new Client();
        $response = $client->get("https://platform.fatsecret.com/rest/server.api", [
            'form_params' => [
                'method' => 'foods.search',
                'search_expression' => 'toast',
                'format' => 'json'
            ],
            'headers' => [
                'Authorization' => 'Bearer ' . $token,
                'Content-Type' => 'application/x-www-form-urlencoded'
            ]

        ]);

        $body = $response->getBody();
        $data = json_decode($body, true);

        print_r($data);
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
                    'scope' => 'basic'
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
