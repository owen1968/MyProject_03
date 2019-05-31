// 範例三
// 使用 JavaScript Object 定義 (非array, 非JSON)

var vjson = 
[
  { pdate : '2014.01.20',
    title : '陶晶瑩《嗯嘛》',
    descr : '',
    yuurl : 'http://www.youtube.com/embed/q4O_PovGTzo',
    rpost : ''
  }, 
  { pdate : '2013.09.22',
    title : '溫嵐《眼淚知道》',
    descr : '',
    yuurl : 'http://www.youtube.com/embed/mCsKGKJFY_8',
    rpost : ''
  }, 
  { pdate : '2013.09.14',
    title : '魏如昀《聽見下雨的聲音》',
    descr : '',
    yuurl : 'http://www.youtube.com/embed/p-GxujMwlOM',
    rpost : ''
  }, 
  { pdate : '2013.05.23',
    title : '江蕙《落雨聲》',
    descr : '',
    yuurl : 'http://www.youtube.com/embed/bJS8PoIRcIg',
    rpost : ''
  }, 
  { pdate : '2012.07.28',
    title : '吳宗憲《你比從前快樂》',
    descr : '',
    yuurl : 'http://www.youtube.com/embed/MU7JmTT9oEw',
    rpost : ''
  }, 
  { pdate : '2010.05.19',
    title : '周杰倫《煙花易冷》',
    descr : '',
    yuurl : 'http://www.youtube.com/embed/--BqapCA3vg',
    rpost : ''
  }, 
];


document.write('<table border="1">');
for(i=0; i<vjson.length; i++)
{
   var s_pdate = vjson[i].pdate;
   var s_title = vjson[i].title;
   var s_descr = vjson[i].descr;
   var s_yuurl = vjson[i].yuurl;
   var s_rpost = vjson[i].rpost;
   
   document.write('<tr>');
   document.write('<td>' + i + '</td>');
   document.write('<td>' + s_pdate + '</td>');
   document.write('<td>' + s_title + '</td>');
   document.write('<td>' + s_descr + '</td>');
   document.write('<td>' + s_yuurl + '</td>');
   document.write('<td>' + s_rpost + '</td>');
   document.write('</tr>');
}
document.write('</table');