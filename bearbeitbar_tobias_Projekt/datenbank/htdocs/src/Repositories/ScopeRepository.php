<?php
/**
 * @author      Alex Bilbie <hello@alexbilbie.com>
 * @copyright   Copyright (c) Alex Bilbie
 * @license     http://mit-license.org/
 *
 * @link        https://github.com/thephpleague/oauth2-server
 */

//modified

namespace WT2Uebung\Repositories;

use League\OAuth2\Server\Entities\ClientEntityInterface;
use League\OAuth2\Server\Repositories\ScopeRepositoryInterface;
use WT2Uebung\Entities\ScopeEntity;

class ScopeRepository implements ScopeRepositoryInterface
{
    /**
     * {@inheritdoc}
     */
    public function getScopeEntityByIdentifier($scopeIdentifier)
    {
        $scopes = [
            'admin' => [
                'description' => 'Full admin rights',
            ],
            'user:read' => [
                'description' => 'Right to read all entries',
            ],
            'user:write' => [
                'description' => 'Right to read, modify and add entries',
            ],
        ];

        if (\array_key_exists($scopeIdentifier, $scopes) === false) {
            return;
        }

        $scope = new ScopeEntity();
        $scope->setIdentifier($scopeIdentifier);

        return $scope;
    }

    /**
     * {@inheritdoc}
     */
    public function finalizeScopes(
        array $scopes,
        $grantType,
        ClientEntityInterface $clientEntity,
        $userIdentifier = null
    ) {
        return $scopes;
    }
}