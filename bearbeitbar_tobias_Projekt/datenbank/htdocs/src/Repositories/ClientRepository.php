<?php
/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */

// modified

namespace WT2Uebung\Repositories;

use League\OAuth2\Server\Repositories\ClientRepositoryInterface;
use WT2Uebung\Entities\ClientEntity;

class ClientRepository implements ClientRepositoryInterface
{
    const CLIENT_NAME = 'React App';
    const REDIRECT_URI = 'http://localhost:3000/';

    /**
     * {@inheritdoc}
     */
    public function getClientEntity($clientIdentifier)
    {
        $client = new ClientEntity();

        $client->setIdentifier($clientIdentifier);
        $client->setName(self::CLIENT_NAME);
        $client->setRedirectUri(self::REDIRECT_URI);
        $client->setConfidential();

        return $client;
    }

    /**
     * {@inheritdoc}
     */
    public function validateClient($clientIdentifier, $clientSecret, $grantType)
    {
        $clients = [
            'reactapp' => [
                'secret'          => \password_hash('abc123', PASSWORD_BCRYPT),
                'name'            => self::CLIENT_NAME,
                'redirect_uri'    => self::REDIRECT_URI,
                'is_confidential' => true,
            ],
        ];

        // Check if client is registered
        if (\array_key_exists($clientIdentifier, $clients) === false) {
            return false;
        }

        if (
            $clients[$clientIdentifier]['is_confidential'] === true
            && \password_verify($clientSecret, $clients[$clientIdentifier]['secret']) === false
        ) {
            return false;
        }

        return true;
    }
}