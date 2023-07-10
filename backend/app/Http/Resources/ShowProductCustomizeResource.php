<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShowProductCustomizeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'product_customize_id'=>$this->id,
            'size'=>$this->size,
            'price'=> $this->price,
            'product'=> new ProductResource($this->product),
        ];
    }
}
