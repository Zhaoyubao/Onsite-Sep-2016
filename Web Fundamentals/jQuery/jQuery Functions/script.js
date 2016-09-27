$(document).ready(function() {
    $("button#addclass").click(function() {
        $("p#addclass").toggleClass("blue");
    });
    $("button#val").click(function() {
        var val = "Data=" + $("input#val").val();
        $("span#val").text(val);
        $("input#val").data("data", val);
        $("input#val").val("");
    });
    $("button#data").click(function() {
        $("span#data").text($("input#val").data("data"));
    });
    $("button").click(function() {
        if($(this).attr("id") == "text") {
            var text = "Text:" + $("input#textHtml").val();
            $("p#textHtml").text(text);
        }
        if($(this).attr("id") == "html") {
            var html = "HTML:" + $("input#textHtml").val();
            $("p#textHtml").html(html);
        }
    });
    $("button#focus").click(function() {
        $("input#focus").focus();
        $("span#focus").css("display","inline").fadeOut(1000);
    });
    $("input#focus").focusin(function() {
        $(this).val("Focused In");
    });
    $("input#focus").focusout(function() {
        $(this).val("");
    });
    $("button").click(function() {
        if($(this).attr("id") == "before") {
            var content = "<p class='add'>" + $("input#add").val() + "</p>";
            $("p#content").before(content);
        }
        if($(this).attr("id") == "prepend") {
            var content = "<p class='add'>" + $("input#add").val() + "</p>";
            $("p#content").prepend(content);
        }
        if($(this).attr("id") == "append") {
            var content = "<p class='add'>" + $("input#add").val() + "</p>";
            $("p#content").append(content);
        }
        if($(this).attr("id") == "after") {
            var content = "<p class='add'>" + $("input#add").val() + "</p>";
            $("p#content").after(content);
        }
        if($(this).attr("id") == "reset") {
            $("div#content").html('<p id="content"><b>Original Contents.</b></p>');
            $("input#add").val("");
        }
    });
    $("button").click(function() {
        if($(this).attr("id") == "show") {
            $("img#showHide").show("normal");
        }
        if($(this).attr("id") == "hide") {
            $("img#showHide").hide("normal");
        }
        if($(this).attr("id") == "toggle") {
            $("img#showHide").toggle("normal");
        }
    });
    $("button").click(function() {
        if($(this).attr("id") == "fadein") {
            $("img#fade").fadeIn("slow");
        }
        if($(this).attr("id") == "fadeout") {
            $("img#fade").fadeOut("slow");
        }
    });
    $("button").click(function() {
        if($(this).attr("id") == "slideup") {
            $("img#slide").slideUp("slow");
        }
        if($(this).attr("id") == "slidedown") {
            $("img#slide").slideDown("slow");
        }
        if($(this).attr("id") == "slidetoggle") {
            $("img#slide").slideToggle("slow");
        }
    });

})
