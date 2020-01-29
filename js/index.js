while (true) {
    console.log("im a memory leak!! hahaha!! by pablo")
    await new Promise(r => setTimeout(r, 2000));
}