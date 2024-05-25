function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const openBtn = document.querySelector('.open-btn');
    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
        openBtn.innerHTML = '☰ Open Sidebar';
    } else {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
        openBtn.innerHTML = '✕ Close Sidebar';
    }
}
