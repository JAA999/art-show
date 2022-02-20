function expandSidebar() {
    const sidebar = document.getElementById("sidebar");
    const topBar = document.getElementById("topBar");
    const expander = document.getElementById("menuExpander");
    const search = document.getElementById("search");
    const bag = document.getElementById("bag");
    const bio = document.getElementById("artistBio");
    Object.assign(topBar.style, {width: "88%", marginRight: "300px"});
    Object.assign(bio.style, {width: "88%", marginRight: "300px"});
    search.style.left = "73%";
    bag.style.left = "74%";
    expander.style.left = "75%";
    sidebar.style.visibility = "visible";
}