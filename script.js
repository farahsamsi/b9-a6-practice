// function for all posts fetching
const loadAllPosts = async (category) => {
  // const response = await fetch(
  //   `https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:""}`
  // );
  const response = await fetch (`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`);
  const data = await response.json();
  displayPosts(data.posts);
};

// function for each post displaying
const displayPosts = (posts) => {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = '';

  posts.forEach((post) => {
    const div = document.createElement("div");
    
    div.innerHTML = `
    <div class="flex w-full p-10 rounded-3xl gap-6 bg-[#F3F3F5]">
                        <div class="w-20 relative">
                            <img class="w-full object-cover rounded-2xl" src=${post.image} alt="image">
                            <!-- red green dot -->
                            <div id="active-status" class="absolute -top-2 -right-2 w-5 h-5 rounded-full ${post.isActive? "bg-green-500" : "bg-red-500"}"></div>
                        </div>
                        <div class="flex-1">
                            <div class="text-sm font-medium text-[#3F4055] space-x-6">
                                <span># ${post.category}</span>
                                <span>Author: ${post.author.name}</span>
                            </div>
                            <h1 class="font-bold text-xl py-4">${post.title} </h1>
                            <div class="text-sm font-medium text-[#3F4055] pb-5 border-b-2 border-dashed">
                                ${post.description}
                            </div>
                            <div class="flex gap-4 mt-6">
                                <p>
                                    <i class="fa-regular fa-comment-dots"></i>
                                    <span>${post.comment_count}</span>
                                </p>
                                <p>
                                    <i class="fa-regular fa-eye"></i>
                                    <span>${post.view_count}</span>
                                </p>
                                <p>
                                    <i class="fa-regular fa-clock"></i>
                                    <span>${post.posted_time} min</span>
                                </p>
                            </div>
                        </div>
                    </div>
  `;
  
    postContainer.append(div);
    
  });
  
};

// calling the loadAllPost function
loadAllPosts();

// search by category function
const handleSearchByCategory = () =>{
  const searchText = document.getElementById('searchPosts').value;
  if(searchText === ''){
    alert('Invalid Category');
  }
  else{
    loadAllPosts(searchText);
  }
}
