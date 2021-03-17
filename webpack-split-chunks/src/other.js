import "./common.css"
import "./other.css"

import "./zztj"

let htmlDom = `<h1>论语</h1><div class="lunyu">子曰：“学而时习之，不亦说乎？有朋自远方来，不亦乐乎？人不知而不愠，不亦君子乎？”

　　有子曰：“其为人也孝弟，而好犯上者，鲜矣；不好犯上而好作乱者，未之有也。君子务本，本立而道生。孝弟也者，其为仁之本与！”

　　子曰：“巧言令色，鲜矣仁！”

　　曾子曰：“吾日三省吾身：为人谋而不忠乎？与朋友交而不信乎？传不习乎？”

　　子曰：“道千乘之国，敬事而信，节用而爱人，使民以时。”

　　子曰：“弟子入则孝，出则弟，谨而信，泛爱众，而亲仁，行有余力，则以学文。”

　　子夏曰：“贤贤易色；事父母，能竭其力；事君，能致其身；与朋友交，言而有信。虽曰未学，吾必谓之学矣。”

　　子曰：“君子不重则不威，学则不固。主忠信，无友不如己者，过，则勿惮改。”

　　曾子曰：“慎终追远，民德归厚矣。”

　　子禽问于子贡曰：“夫子至于是邦也，必闻其政，求之与，抑与之与？”子贡曰：“夫子温、良、恭、俭、让以得之。夫子之求之也，其诸异乎人之求之与？”</div>`


let boxEle = document.querySelector(".box")
let preveHtml = boxEle.innerHTML
boxEle.innerHTML = htmlDom + preveHtml



