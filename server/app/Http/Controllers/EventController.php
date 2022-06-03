<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Event::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'date' => 'required|date',
            'title' => 'required',
            'location' => 'required',
            'note' => 'required',
        ]);
        return Event::create($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Event  $event
     * @return Event
     */
    public function show(Event $event)
    {
        return $event;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Event  $event
     * @return Event
     */
    public function update(Request $request, Event $event)
    {
        $event->update($request->all());
        return $event;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Event  $event
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy(Event $event)
    {
        $event->delete();
        return response()->json(null, 204);
    }

    public function minimumAndMaximumDate() {
        $minimum = Event::all('date')->min('date');
        $maximum = Event::all('date')->max('date');

        return response()->json(['minimum' => $minimum, 'maximum' => $maximum], 200);
    }
}
