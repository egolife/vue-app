<ul>
    @foreach($projects as $project)
        <li>{{ $project->name }} ({{ str_limit($project->description) }})</li>
    @endforeach
</ul>