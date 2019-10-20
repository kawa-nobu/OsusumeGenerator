    //位置標準
    var rl_num = 275;
    var upd_num = 125;
    var bs_num = 100;
    var font_1_num = 24;
    var font_2_num = 42;
    //コントロール用関数
    function right() {
      document.getElementById('r').onclick = function () {
        rl_num = rl_num + 5;
        img_add();
      }
    }

    function left() {
      document.getElementById('l').onclick = function () {
        rl_num = rl_num - 5;
        img_add();
      }
    }

    function up() {
      document.getElementById('up').onclick = function () {
        upd_num = upd_num - 5;
        img_add();
      }
    }

    function down() {
      document.getElementById('down').onclick = function () {
        upd_num = upd_num + 5;
        img_add();
      }
    }

    function big() {
      document.getElementById('big').onclick = function () {
        bs_num = bs_num + 5;
        img_add();
      }
    }

    function small() {
      document.getElementById('small').onclick = function () {
        bs_num = bs_num - 5;
        img_add();
      }
    }
    //フォント処理関数
    function add_text1() {
      var text1 = document.getElementById('text1').value;
      var out = document.getElementById('output');
      var canv = out.getContext('2d');
      canv.font = "bold " + font_1_num + "px Noto Sans JP";
      canv.fillText(text1, 404, 229);
    }

    function add_text2() {
      var text2 = document.getElementById('text2').value;
      var out = document.getElementById('output');
      var canv = out.getContext('2d');
      canv.font = "bold " + font_2_num + "px Noto Sans JP";
      canv.fillText(text2, 380, 268);
    }
    //画像処理関数
    function img_add() {
      if (document.getElementById('add').files[0] != undefined) {
        var out = document.getElementById('output');
        var canv = out.getContext('2d');
        var img = new Image();
        img.src = window.URL.createObjectURL(document.getElementById('add').files[0]);
        img.onload = function () {
          canv.clearRect(0, 0, 760, 430);
          canv.drawImage(img, rl_num, upd_num, bs_num, bs_num);
          run();
        }
      } else {
        window.alert("画像が指定されていません！");
      }
    }

    function run() {
      var out = document.getElementById('output');
      var canv = out.getContext('2d');
      var img = new Image();
      img.src = "./OSUSUME.png";
      img.onload = function () {
        canv.drawImage(img, 0, 0, 760, 430);
        font_1_num = document.getElementById('font1').value;
        add_text1();
        font_2_num = document.getElementById('font2').value;
        add_text2();
      }
    }
    function save_open() {
      if (document.getElementById('add').files[0] != undefined) {
        var page = document.documentElement;
        var page_height = page.scrollHeight - page.clientHeight;
        var canvas = document.getElementById('output');
        var save_tag = document.getElementById('save_img');
        var gene_data = canvas.toDataURL('image/png');
        var a_tag = document.getElementById('save_down');
        save_tag.style.visibility = "visible";
        a_tag.style.visibility = "visible";
        save_tag.src = gene_data;
        a_tag.href = gene_data;
        a_tag.download = 'save_picture.png';
        window.scroll(0, page_height);
      } else {
        window.alert("画像が指定されていないので保存できません！");
      }
    } 