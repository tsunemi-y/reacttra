<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShoppingListController extends Controller
{
    public function get()
    {
        $shoppingList = [
            [
                'id'   => 1,
                'name' => '肉'
            ],
            [
                'id'   => 2,
                'name' => '魚'
            ],
            [
                'id'   => 3,
                'name' => '野菜'
            ],
            [
                'id'   => 4,
                'name' => 'ぶどう'
            ],
        ];
        return $shoppingList;
    }
}
