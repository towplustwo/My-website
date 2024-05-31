document.addEventListener("DOMContentLoaded", function () {
    const blogPosts = [
        
    ];

    const projects = [
        {
            title: "Sample Project",
            date: "2024-05-30",
            content: "This is a sample project I worked on which involves..."
        },
        {
            title: "Another Project",
            date: "2024-05-29",
            content: "Here is another project where I explored..."
        }
    ];

    const blogContainer = document.getElementById("blog-posts");
    const projectContainer = document.getElementById("project-list");

    blogPosts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p><small>${post.date}</small></p>
            <p>${post.content}</p>
        `;
        blogContainer.appendChild(postElement);
    });

    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p><small>${project.date}</small></p>
            <p>${project.content}</p>
        `;
        projectContainer.appendChild(projectElement);
    });
});
