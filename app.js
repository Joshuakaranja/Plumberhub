// defining global state for the app
const state = {
    activeTab:"plumbers",
};

//select elements from the DOM
const app = document.getElementById('app');
const buttons = document.querySelectorAll("nav button");

// add tab switching functionality
buttons.forEach(button => {
    button.addEventListener("click", () => {
        state.activeTab = button.dataset.tab;
        render();
    });
});

// basic render function to update the UI based on the active tab

// render controllers
function render(){
    app.innerHTML="";

    if(state.activeTab === "plumbers"){
        renderPlumbers();
    }
    if(state.activeTab === "shops"){
        renderShops();
    }
    if(state.activeTab === "posts"){
        renderPosts();
    }
    if(state.activeTab === "form"){
        renderForm();
    }

}
//specialiazed rerenders for each section
function renderPlumbers() {
  app.innerHTML = "<h2>Plumbers Section</h2>";
}

function renderShops() {
  app.innerHTML = "<h2>Shops Section</h2>";
}

function renderPosts() {
  app.innerHTML = "<h2>DIY Hacks Section</h2>";
}

function renderForm() {
  app.innerHTML = "<h2>Post Content Section</h2>";
}

// initial render
render();