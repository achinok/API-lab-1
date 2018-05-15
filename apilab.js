let url = "https://www.reddit.com/r/aww/.json";

$.get(url).done( (data) => {
    console.log("here is my display result");
});


$.get(url).done( (data) => {
    for (i =0; i <data.data.children.length; i++) {  
    console.log(data.data.children[i].data.thumbnail);
    let target= $("#picture");
    let title= data.data.children[i].data.title;
   
    target.append(`<a href="${data.data.children[i].data.url}"><p>${i}</p><img src="${data.data.children[i].data.thumbnail}"/></a>`);
    $(target.append(title)).css({"color": "white", "font-size": "200%", "display": "flex", "margin": "20px"});
}
});



// $.get("https://www.reddit.com/r/aww/.json").then(function (json) {
//     let text = json.data.children;    
// 	let target = $("#output");
// 	target.append(`<img src="${text[0].data.thumbnail}"/>`);






// $.get("https://dwolverton.github.io/fe-demo/data/blog-posts.json", (data) => {
   
//     for (i = 0; i < data.posts.length; i++){
//         console.log(data.posts[i].title);
//     }
//     for (i = 0; i < data.posts.length; i++){
//         console.log(data.posts[i].tags[0]);
//     }
// });






// $.get(url).done( (data)=>{
//     for(let i = 0; i<data.posts.length; i++){
//         console.log(`Post Number ${i}`)
//         let postTags = data.posts[i].tags;
//         ///console.log(postTags);
//         for(let j = 0; j<postTags.length; j++){
//             console.log(postTags[j]);
//         }
//         console.log('--------');  // unnecessary 
//     }
// }).fail( ()=>{
//     console.log("Calling the API did not work!");
// })
// .always(()=>{
//     console.log("I always get run, rain sleet or shine")
// });

