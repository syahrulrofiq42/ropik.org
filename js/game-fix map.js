setGame("1200x600");
game.folder = "assets";
//file gambar yang dipakai dalam game
var gambar = {
	logo:"R games (2).png",
	startBtn:"tombolStart.png",
	cover:"cover.jpg",
	playBtn:"btn-play.png",
	maxBtn:"maxBtn.png",
	minBtn:"minBtn.png"	,
	idle:"Idle.png",
	run:"Run.png",
	jump:"Jump.png",
	fall:"Fall.png",
	hit:"Hit.png",
	tileset:"terrain.png",
	bg : "bg.png"


}
//file suara yang dipakai dalam game
var suara = {
}

//load gambar dan suara lalu jalankan startScreen
loading(gambar, suara, startScreen);

function startScreen(){	
	hapusLayar("#68d2c7");
	tampilkanGambar(dataGambar.logo, 600, 220);
	var startBtn = tombol(dataGambar.startBtn, 600, 500);
	if (tekan(startBtn)){
		jalankan(halamanCover);
	}
}
function halamanCover(){
	hapusLayar("#67d2d6");
	gambarFull(dataGambar.cover);
	var playBtn = tombol(dataGambar.playBtn, 1100, 500);
	if (tekan(playBtn)){
		setAwal();
		jalankan(gameLoop);
	}	
	resizeBtn(1150,50);
}

function setAwal(){
	game.hero = setSprite(dataGambar.idle, 32, 32);
	game.skalaSprite = 2;
	game.hero.animDiam = dataGambar.idle;
	game.hero.animLompat = dataGambar.jump;
	game.hero.animJalan = dataGambar.run;
	game.hero.animJatuh = dataGambar.fall;
	game.hero.animMati = dataGambar.hit;
	setPlatform(map_1, dataGambar.tileset, 32, game.hero);
	game.gameOver = ulangiPermainan;
}

function ulangiPermainan(){
	gambar.aktif = true;
	setAwal();
	jalankan(gameLoop);

}

function gameLoop(){
	hapusLayar("");	
	if (game.kanan){
		gerakLevel(game.hero, 5, 0);
	}else if (game.kiri){
		gerakLevel(game.hero, -5, 0);
	}
	if (game.atas){
		gerakLevel(game.hero, 0, -15);
	}
	buatLevel();
}