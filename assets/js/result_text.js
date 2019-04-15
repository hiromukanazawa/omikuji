
document.getElementById('Horoscope').addEventListener('click', omikuji );



function omikuji(){
	const text = {};

	text["大吉"]  = "大吉のあなたはとてもラッキー！<br>今日は100億円があなたの口座に振り込まれ、挙げ句の果てに国の首相になります";
	text["小吉"] = "小吉のあなたはそこそこラッキー！<br>食べたアイスが全部当たるでしょう。そして癌が治る。";
	text["吉"] = "吉のあなたはとても平凡！<br>身の程を弁えた暮らしをしましょう";
	text["大凶"] = "でっかいデキモノが顎にできます";
	text["明日死にます"] = "明日が人生最後の日だとしたら、貴方は今日をそのように暮らしますか？<br>人生は有限です。貴方が一日一日を噛み締めて生きてくれることを願っています";

	let result = ["大吉","小吉","吉","大凶","明日死にます"];
	let color = ["orange","red","blue","green","yellow","purple"];

	let i = Math.random();
	i = Math.floor(i * result.length);

	let num = Math.random();
	num = Math.floor(num * color.length);

	document.getElementById("luck").innerHTML = `<h1 id = "${color[num]}">${result[i]}</h1><h3>ラッキーカラーは"<span id = "font_${color[num]}">${color[num]}</span>"です！</h3>`

	document.getElementById("message").innerHTML = text[result[i]]
}