const navbar = `
<div class="nav">
    <div>Logo</div>
    <div onclick="logout()">Logout</div>
</div>
`

const hero = `
<div class="hero"></div>`


const select = `<span>Choose a category</span>
<select name="categories" onchange="handleCategoryChange(this)">
    <option value="posts">posts</option>
    <option value="albums">albums</option>
    <option value="todos">todos</option>
    <option value="users">users</option>
</select>
`