// // $( document ).ready(function() {
// //   $('ul a').click(function() {
// //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
// //       var target = $(this.hash);
// //       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
// //       if (target.length) {
// //         $('html, body').animate({
// //           scrollTop: target.offset().top
// //         }, 1000);
// //         return false;
// //       }
// //     }
// //   });
// // });


// var jump=function(e)
// {
//        //prevent the "normal" behaviour which would be a "hard" jump
//        e.preventDefault();
//        //Get the target
//        var target = $(this).attr("href");
//        //perform animated scrolling
//        $('html,body').animate(
//        {
//                //get top-position of target-element and set it as scroll target
//                scrollTop: $(target).offset().top
//        //scrolldelay: 2 seconds
//        },2000,function()
//        {
//                //attach the hash (#jumptarget) to the pageurl
//                location.hash = target;
//        });

// }

// $(document).ready(function()
// {
//        $('a[href*=#]').bind("click", jump);
//        return false;
// });

