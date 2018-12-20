$(function () {
    var $menu = $(".hdnav"), $menuLi = $("#header_nav>ul>li"), $submenu = $menu.find('li.submenu');
	if($menuLi.hasClass("current-menu-ancestor")){
		$current = $menu.find('.current-menu-ancestor');
	}else{
		$current = $menu.find('.current-menu-item')
	}
    $current.addClass("first");
	var current = $menuLi.index($(".first"));
	$menu.css("background-position", (130 * current) + "px" + " 36px");
	$menuLi.hover(function () {
        var $this = $(this), num = $menuLi.index($this), current = $menuLi.index($(".first")), len = current - num;
        $menu.css("background-position", (130 * current) + "px" + " 36px");
        $current.removeClass("lihover");
        $menuLi.removeClass("first");
        $this.addClass("first");
        if (len <= 0) { len = -len; };
        $menu.stop().animate({ backgroundPosition: (130 * num) + "px" + " 36px" }, 130 * len);
    });
    $submenu.hover(function () {
        $(this).children("ul").stop(true, true).fadeIn(0);
    }, function () {
        $(this).children("ul").fadeOut(500, function () {
            $(this).children("ul").css("display", "none");
        });
    });
    $menu.mouseleave(function () {
        var $this = $(this), num = $menuLi.index($this), current = $menuLi.index($current), len = current - num;
        $menuLi.removeClass("first");
        $current.addClass("first");
        if (len <= 0) { len = -len; };
        $menu.stop().animate({ backgroundPosition: 130 * current + "px" + " 36px" }, 130 * len);
    });
    $("a.noclick").click(function (event) {
        event.preventDefault();
    });
});