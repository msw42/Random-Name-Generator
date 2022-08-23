let newName = document.getElementById("new-name")

const adjArray = ["achy", "ageless", "authentic", "blissful", "benevolent", "benign", "bold", "brave", "bustling", "calm", "charming", "crazy", "clean", "dutiful", "dapper", "dainty", "dashing", "dazzling",
"dauntless", "eager", "earnest", "easy", "elated", "eccentric", "fair", "fabulous", "faithful", "famous", "fanciful", "factual", "gigantic", "glad", "gloomy", "glamorous", "guiltess", "gentle", 
"hilarious", "happy", "hungry", "hysterical", "hollow", "introverted", "iconincal", "icky", "illogical", "impassioned", "implicit", "ingenious", "jovial", "jazzy", "jestful", "jumbled", "justified", 
"kindled", "kindred", "keen", "knowledgeable", "kinlgy", "laborious", "lamentable", "lacking", "lovely", "magnetic", "masterful", "magnanimous", "merry", "magnificent", "narrow", "neat", 
"nerdy", "nervous", "obedient", "odd", "optimistic", "organic", "patient", "perfect", "philanthropic", "pale", "quality", "quick", "qualified", "quarrelsome", "radiant", "radioactive", "rampant", 
"resilient", "sleek", "sleepy", "sly", "silent", "small", "tactical", "tiresome", "tailored", "tactful", "tasteful", "ultra", "urban", "usual", "useful", "ugly", "vacant", "valiant", "vast", "variable",
"wacky", "wishful", "wearisome", "wild", "xenial", "xenodochial", "yielding", "youthful", "yearning", "yawning", "zealous", "zestful", "zippy", "zany"]

const nounArray = ["aaple", "aardvark", "avocado", "avalanche", "boat", "board", "billion", "bluff", "brawn", "code", "club", "coffee", "card", "capital", "captain", "disaster", "dawn", "dancer", 
"decade", "diamond", "eagle", "elegance", "emrald", "explosion", "event", "fan", "face", "few", "figure", "frame", "function", "goal", "gamble", "goat", "gold", "guard", "hand", "home", "heart", 
"hat", "iceberg", "image", "import", "iguana", "ibex", "jackpot", "jazz", "jeep", "jellyfish", "jester", "jubilee", "kaleidoscope", "keyboard", "kite", "keeper", "kayak", "label", "labor", "lady", "language",
"laser", "logic", "loop", "machine", "manager", "method", "million", "museum", "nacho", "nickel", "nector", "nominee", "outcast", "opal", "ooze", "olive", "object", "plant", "platform", "point",
"panda", "reaction", "reason", "region", "risk", "rule", "sabotage", "saga", "script", "solution", "tree", "tea", "team", "talent", "truck", "type", "udder", "ultimatum", "unit", "unicorn", "utensil",
"view", "video", "villa", "venue", "voltage", "wildlife", "warning", "week", "weight", "wire", "x-factor", "xenon", "xylophone", "yacht", "yak", "youth", "zag", "zenith", "zeppelin", "zone", "zoo"]


const generateName = () =>  {
    let adj = adjArray[Math.floor(Math.random() * 120)]
    let noun = nounArray[Math.floor(Math.random() * 120)]
    if (noun !== "code") {
        //Gives an output of both words capitalized with a space between them
        adj = adj.charAt(0).toUpperCase() + adj.slice(1)
        noun = noun.charAt(0).toUpperCase() + noun.slice(1)
        newName.textContent = adj +  " " + noun
    } else {
        //Changes the output to camelCase since the name has "code" in it
        noun = noun.charAt(0).toUpperCase() + noun.slice(1)
        newName.textContent = adj + noun
    }
}