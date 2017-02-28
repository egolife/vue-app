<div class="box content" style="margin-top: 3em;">
    <h2>Available projects</h2>
    <ul>
        <li v-for="project in projects" v-text="project.name + ' (' + _.truncate(project.description) + ')'"></li>
    </ul>
</div>
