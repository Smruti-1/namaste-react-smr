


const parent = React.createElement("div", {id:"parent"}, 
[React.createElement("div", {id: "child1"},
[ React.createElement("h1", {}, "i am children of 1st child"),
React.createElement("h2", {} , "I am sibling of children1")
]),
React.createElement("div" , {id: 'child2'}, [
    React.createElement("h1", {}, "i am children of 2nd child"),
    React.createElement("h2", {} , "I am sibling of children2")   
])
])


               console.log(parent)
                const root = ReactDOM.createRoot(document.getElementById("root"))
                root.render(parent)
          