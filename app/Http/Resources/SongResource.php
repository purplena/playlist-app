<?php

namespace App\Http\Resources;

use App\Models\Blacklist;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SongResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'spotify_id' => $this->spotify_id,
            'song_data' => $this->song_data,
            'blacklist_id' => $this->whenPivotLoaded(new Blacklist, function () {
                return $this->pivot->id;
            }),
        ];
    }
}
