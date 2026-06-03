class Solution {
    
    canFinish(numCourses, prerequisites) {
        let indegree = Array(numCourses).fill(0);
    let adj = Array(numCourses).fill(0).map(() => []);
    let queue = [];

    for(let [u,v] of prerequisites){
        adj[v].push(u);
    }    

    for (let [course, prereq] of prerequisites) {
        indegree[course]++;
    }

    for (let course = 0; course < numCourses; course++) {
        if (indegree[course] == 0) {
            queue.push(course);
        }
    }

    while (queue.length) {
        let course = queue.shift();

        for(let i = 0; i < adj[course].length; i++){
            let neighbor = adj[course][i];

            indegree[neighbor]--;

            if(indegree[neighbor] == 0){
                queue.push(neighbor);
            }
        }                
    }

    for(let c = 0; c < numCourses; c++){
        if(indegree[c] != 0){
            return false;
        }        
    }
    return true;
    }
}
