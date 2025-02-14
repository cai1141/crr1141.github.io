document.addEventListener('DOMContentLoaded', function() {
    // 搜索功能
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        // 这里添加搜索逻辑
    });

    // 标签点击
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            tag.classList.toggle('active');
            // 这里添加标签筛选逻辑
        });
    });

    // 收藏功能
    const saveButtons = document.querySelectorAll('.btn-save');
    saveButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            btn.classList.toggle('saved');
            // 这里添加收藏逻辑
        });
    });
}); 