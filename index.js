module.exports = function uselessLoader(source, map) {
  console.log("Hello from the useless laoder!");

  const re = /<\/head>(?![\s\S]*<\/head>[\s\S]*$)/i;
  const output = source.replace(re, `
    <!--
       ██╗   ██╗███████╗███████╗██╗         ███████╗██╗   ██╗ ██████╗ ██████╗███████╗███████╗
       ██║   ██║██╔════╝██╔════╝██║         ██╔════╝██║   ██║██╔════╝██╔════╝██╔════╝██╔════╝
       ██║   ██║█████╗  █████╗  ██║         ███████╗██║   ██║██║     ██║     █████╗  ███████╗
       ╚██╗ ██╔╝██╔══╝  ██╔══╝  ██║         ╚════██║██║   ██║██║     ██║     ██╔══╝  ╚════██║
        ╚████╔╝ ███████╗███████╗███████╗    ███████║╚██████╔╝╚██████╗╚██████╗███████╗███████║
         ╚═══╝  ╚══════╝╚══════╝╚══════╝    ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝╚══════╝╚══════╝

         _______oBBBBB8o______oBBBBBBB
         _____o8BBBBBBBBBBB__BBBBBBBBB8________o88o,
         ___o8BBBBBB**8BBBB__BBBBBBBBBB_____oBBBBBBBo,
         __oBBBBBBB*___***___BBBBBBBBBB_____BBBBBBBBBBo,
         _8BBBBBBBBBBooooo___*BBBBBBB8______*BB*_8BBBBBBo,
         _8BBBBBBBBBBBBBBBB8ooBBBBBBB8___________8BBBBBBB8,
         __*BBBBBBBBBBBBBBBBBBBBBBBBBB8_o88BB88BBBBBBBBBBBB,
         ____*BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB8,
         ______**8BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB*,
         ___________*BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB8*,
         ____________*BBBBBBBBBBBBBBBBBBBBBBBB8888**,
         _____________BBBBBBBBBBBBBBBBBBBBBBB*,
         _____________*BBBBBBBBBBBBBBBBBBBBB*,
         ______________*BBBBBBBBBBBBBBBBBB8,
         _______________*BBBBBBBBBBBBBBBB*,
         ________________8BBBBBBBBBBBBBBB8,
         _________________8BBBBBBBBBBBBBBBo,
         __________________BBBBBBBBBBBBBBB8,
         __________________BBBBBBBBBBBBBBBB,
       -->
    </head>`)

  this.callback(null, output, map);
};
