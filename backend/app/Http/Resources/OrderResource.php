<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'order_id'=>$this->id,
            'store'=>new StoreResource($this->store),
            'table_number'=>$this->table->table_number,
            'datetime'=>$this->datetime,
            'is_complete'=>$this->is_complete,
            'order_details'=>OrderDetailResource::collection($this->orderDetails)
        ];
    }
}
