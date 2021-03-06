function DDSCloud() {
	var _this = this;

	this.w = $(window).width();
	this.h = $(window).height();

	this.color    = ['#1e90ff', '#f08080', '#00ff7f'];
	this.color_sp = ['#00ccff', '#99ff00', '#ffff66'];


	this.render_cloud = function(nodes, tag_id) {
		var max_size  = d3.max(nodes, function(n){ return n.size} );
		var sizeScale = d3.scale.linear().domain([0, max_size]).range([15, 90]);

		var words = nodes.map(function(n) {
			return {
				name: n.name,
				text: n.name,
				size: sizeScale(n.size),
				group: n.group
			}
		});

		d3.layout.cloud().size([574,400])
		.words(words)
		.padding(5)
		.rotate(function() { return 0; })
		.font('Impact')
		.fontSize(function(d) { return d.size; })
		.on("end", function(nodes) {
			d3.select(tag_id).append("svg")
			.attr("width", 574)
			.attr("height", 400)
			.append("g")
			.attr("transform", "translate(287, 200)")
			.selectAll("text")
			.data(nodes)
			.enter().append("text")
			.style("font-size", function(d) { return d.size + "px"; })
			.attr("text-anchor", "middle")
			.style("font-family", "Impact")
			.style("fill", function(d, i) { return _this.color[d.group - 1]; })
			.attr("transform", function(d) {
				return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
			})
			.text(function(d) { return d.name; });
		})
		.start();
	}

}



$(function(){
	var dds_cloud = new DDSCloud();

	dds_cloud.render_cloud(
		[
		   {
		      "name":"ゴミ",
		      "group":1,
		      "size":430.10752688172045
		   },
		   {
		      "name":"掃除",
		      "group":1,
		      "size":388.4842178286507
		   },
		   {
		      "name":"掃除機",
		      "group":1,
		      "size":272.86391490345704
		   },
		   {
		      "name":"ヘッド",
		      "group":1,
		      "size":254.36466643542602
		   },
		   {
		      "name":"サイクロン",
		      "group":1,
		      "size":249.7398543184183
		   },
		   {
		      "name":"吸引",
		      "group":1,
		      "size":198.86692103133308
		   },
		   {
		      "name":"購入",
		      "group":1,
		      "size":175.74286044629437
		   },
		   {
		      "name":"カップ",
		      "group":1,
		      "size":171.1180483292866
		   },
		   {
		      "name":"ブラシ",
		      "group":1,
		      "size":161.86842409527114
		   },
		   {
		      "name":"フィルター",
		      "group":1,
		      "size":161.86842409527114
		   },
		   {
		      "name":"部分",
		      "group":1,
		      "size":129.4947392762169
		   },
		   {
		      "name":"MC",
		      "group":1,
		      "size":120.2451150422014
		   },
		   {
		      "name":"ダイソン",
		      "group":1,
		      "size":120.2451150422014
		   },
		   {
		      "name":"分離",
		      "group":1,
		      "size":120.2451150422014
		   },
		   {
		      "name":"フィルタ",
		      "group":1,
		      "size":120.2451150422014
		   },
		   {
		      "name":"回転",
		      "group":1,
		      "size":115.62030292519366
		   },
		   {
		      "name":"SS30",
		      "group":1,
		      "size":110.9954908081859
		   },
		   {
		      "name":"GX",
		      "group":1,
		      "size":110.9954908081859
		   },
		   {
		      "name":"旋回",
		      "group":1,
		      "size":110.9954908081859
		   },
		   {
		      "name":"センサー",
		      "group":1,
		      "size":110.9954908081859
		   },
		   {
		      "name":"なんちゃって",
		      "group":1,
		      "size":110.9954908081859
		   },
		   {
		      "name":"使う",
		      "group":2,
		      "size":150.53763440860214
		   },
		   {
		      "name":"思う",
		      "group":2,
		      "size":140.97968936678612
		   },
		   {
		      "name":"できる",
		      "group":2,
		      "size":71.68458781362007
		   },
		   {
		      "name":"比べる",
		      "group":2,
		      "size":66.90561529271206
		   },
		   {
		      "name":"出る",
		      "group":2,
		      "size":66.90561529271206
		   },
		   {
		      "name":"しまう",
		      "group":2,
		      "size":66.90561529271206
		   },
		   {
		      "name":"買う",
		      "group":2,
		      "size":59.73715651135006
		   },
		   {
		      "name":"くれる",
		      "group":2,
		      "size":54.95818399044206
		   },
		   {
		      "name":"感じる",
		      "group":2,
		      "size":50.17921146953405
		   },
		   {
		      "name":"迷う",
		      "group":2,
		      "size":47.789725209080046
		   },
		   {
		      "name":"捨てる",
		      "group":2,
		      "size":43.01075268817204
		   },
		   {
		      "name":"吸い込む",
		      "group":2,
		      "size":40.62126642771804
		   },
		   {
		      "name":"吸う",
		      "group":2,
		      "size":38.231780167264034
		   },
		   {
		      "name":"おる",
		      "group":2,
		      "size":38.231780167264034
		   },
		   {
		      "name":"考える",
		      "group":2,
		      "size":35.842293906810035
		   },
		   {
		      "name":"入る",
		      "group":2,
		      "size":35.842293906810035
		   },
		   {
		      "name":"軽い",
		      "group":3,
		      "size":150.53763440860214
		   },
		   {
		      "name":"良い",
		      "group":3,
		      "size":110.00827129859388
		   },
		   {
		      "name":"いい",
		      "group":3,
		      "size":98.42845326716295
		   },
		   {
		      "name":"小さい",
		      "group":3,
		      "size":57.899090157154674
		   },
		   {
		      "name":"高い",
		      "group":3,
		      "size":57.899090157154674
		   },
		   {
		      "name":"大きい",
		      "group":3,
		      "size":49.214226633581475
		   },
		   {
		      "name":"重い",
		      "group":3,
		      "size":49.214226633581475
		   },
		   {
		      "name":"やすい",
		      "group":3,
		      "size":46.319272125723735
		   },
		   {
		      "name":"強い",
		      "group":3,
		      "size":43.42431761786601
		   },
		   {
		      "name":"よい",
		      "group":3,
		      "size":37.634408602150536
		   },
		   {
		      "name":"安い",
		      "group":3,
		      "size":34.7394540942928
		   },
		   {
		      "name":"狭い",
		      "group":3,
		      "size":28.949545078577337
		   },
		   {
		      "name":"やさしい",
		      "group":3,
		      "size":23.159636062861868
		   },
		   {
		      "name":"素晴らしい",
		      "group":3,
		      "size":23.159636062861868
		   },
		   {
		      "name":"うるさい",
		      "group":3,
		      "size":20.264681555004135
		   },
		   {
		      "name":"早い",
		      "group":3,
		      "size":17.3697270471464
		   }
		] , '#wordCloud1');


	dds_cloud.render_cloud(
		[
		   {
		      "name":"掃除",
		      "group":1,
		      "size":430.10752688172045
		   },
		   {
		      "name":"ゴミ",
		      "group":1,
		      "size":415.27623285131637
		   },
		   {
		      "name":"購入",
		      "group":1,
		      "size":400.44493882091217
		   },
		   {
		      "name":"吸引",
		      "group":1,
		      "size":341.1197626992955
		   },
		   {
		      "name":"部分",
		      "group":1,
		      "size":311.4571746384873
		   },
		   {
		      "name":"ブラシ",
		      "group":1,
		      "size":311.4571746384873
		   },
		   {
		      "name":"ホース",
		      "group":1,
		      "size":296.6258806080831
		   },
		   {
		      "name":"掃除機",
		      "group":1,
		      "size":296.6258806080831
		   },
		   {
		      "name":"ヘッド",
		      "group":1,
		      "size":266.96329254727476
		   },
		   {
		      "name":"フィルター",
		      "group":1,
		      "size":222.4694104560623
		   },
		   {
		      "name":"ローラー",
		      "group":1,
		      "size":177.97552836484985
		   },
		   {
		      "name":"mm",
		      "group":1,
		      "size":177.97552836484985
		   },
		   {
		      "name":"樹脂",
		      "group":1,
		      "size":177.97552836484985
		   },
		   {
		      "name":"本体",
		      "group":1,
		      "size":177.97552836484985
		   },
		   {
		      "name":"使用",
		      "group":1,
		      "size":177.97552836484985
		   },
		   {
		      "name":"必要",
		      "group":1,
		      "size":163.1442343344457
		   },
		   {
		      "name":"修理",
		      "group":1,
		      "size":163.1442343344457
		   },
		   {
		      "name":"電話",
		      "group":1,
		      "size":148.31294030404155
		   },
		   {
		      "name":"対応",
		      "group":1,
		      "size":148.31294030404155
		   },
		   {
		      "name":"カップ",
		      "group":1,
		      "size":133.48164627363738
		   },
		   {
		      "name":"部品",
		      "group":1,
		      "size":133.48164627363738
		   },
		   {
		      "name":"思う",
		      "group":2,
		      "size":150.53763440860214
		   },
		   {
		      "name":"使う",
		      "group":2,
		      "size":128.2357626443648
		   },
		   {
		      "name":"捨てる",
		      "group":2,
		      "size":89.20748705694942
		   },
		   {
		      "name":"吸い込む",
		      "group":2,
		      "size":66.90561529271206
		   },
		   {
		      "name":"できる",
		      "group":2,
		      "size":61.33014735165273
		   },
		   {
		      "name":"しまう",
		      "group":2,
		      "size":61.33014735165273
		   },
		   {
		      "name":"吸う",
		      "group":2,
		      "size":61.33014735165273
		   },
		   {
		      "name":"買う",
		      "group":2,
		      "size":50.179211469534046
		   },
		   {
		      "name":"くれる",
		      "group":2,
		      "size":44.60374352847471
		   },
		   {
		      "name":"つながる",
		      "group":2,
		      "size":44.60374352847471
		   },
		   {
		      "name":"振れる",
		      "group":2,
		      "size":33.45280764635603
		   },
		   {
		      "name":"言う",
		      "group":2,
		      "size":33.45280764635603
		   },
		   {
		      "name":"切れる",
		      "group":2,
		      "size":33.45280764635603
		   },
		   {
		      "name":"降ろす",
		      "group":2,
		      "size":33.45280764635603
		   },
		   {
		      "name":"吸込む",
		      "group":2,
		      "size":33.45280764635603
		   },
		   {
		      "name":"持つ",
		      "group":2,
		      "size":33.45280764635603
		   },
		   {
		      "name":"軽い",
		      "group":3,
		      "size":150.53763440860214
		   },
		   {
		      "name":"良い",
		      "group":3,
		      "size":127.95698924731182
		   },
		   {
		      "name":"いい",
		      "group":3,
		      "size":60.215053763440864
		   },
		   {
		      "name":"大きい",
		      "group":3,
		      "size":60.215053763440864
		   },
		   {
		      "name":"悪い",
		      "group":3,
		      "size":60.215053763440864
		   },
		   {
		      "name":"重い",
		      "group":3,
		      "size":45.16129032258065
		   },
		   {
		      "name":"安い",
		      "group":3,
		      "size":37.634408602150536
		   },
		   {
		      "name":"小さい",
		      "group":3,
		      "size":37.634408602150536
		   },
		   {
		      "name":"細い",
		      "group":3,
		      "size":30.107526881720432
		   },
		   {
		      "name":"狭い",
		      "group":3,
		      "size":30.107526881720432
		   },
		   {
		      "name":"うるさい",
		      "group":3,
		      "size":30.107526881720432
		   },
		   {
		      "name":"よい",
		      "group":3,
		      "size":30.107526881720432
		   },
		   {
		      "name":"づらい",
		      "group":3,
		      "size":30.107526881720432
		   },
		   {
		      "name":"無い",
		      "group":3,
		      "size":22.580645161290324
		   },
		   {
		      "name":"欲しい",
		      "group":3,
		      "size":22.580645161290324
		   },
		   {
		      "name":"やすい",
		      "group":3,
		      "size":22.580645161290324
		   }
		], '#wordCloud2');

});

