import "./common.css"
import "./index.css"

import "./zztj"

const htmlDom = `<h1>十二本纪·秦本纪</h1><p>秦之先，帝颛顼之苗裔孙曰女脩。女脩织，玄鸟陨卵，女脩吞之，生子大业。大业取少典之子，曰女华。女华生大费，与禹平水土。已成，帝锡玄圭。禹受曰：“非予能成，亦大费为辅。”帝舜曰：“咨尔费，赞禹功，其赐尔皂游。尔后嗣将大出。”乃妻之姚姓之玉女。大费拜受，佐舜调驯鸟兽，鸟兽多驯服，是为柏翳。舜赐姓嬴氏。

　　大费生子二人：一曰大廉，实鸟俗氏；二曰若木，实费氏。其玄孙曰费昌，子孙或在中国，或在夷狄。费昌当夏桀之时，去夏归商，为汤御，以败桀于鸣条。大廉玄孙曰孟戏、中衍，鸟身人言。帝太戊闻而卜之使御，吉，遂致使御而妻之。自太戊以下，中衍之后，遂世有功，以佐殷国，故嬴姓多显，遂为诸侯。

　　其玄孙曰中潏(yù)，在西戎，保西垂。生蜚廉。蜚廉生恶来。恶来有力，蜚廉善走，父子俱以材力事殷纣。周武王之伐纣，并杀恶来。是时蜚廉为纣石北方，还，无所报，为坛霍太山而报，得石棺，铭曰“帝令处父不与殷乱，赐尔石棺以华氏”。死，遂葬于霍太山。蜚廉复有子曰季胜。季胜生孟增。孟增幸于周成王，是为宅皋狼。皋狼生衡父，衡父生造父。造父以善御幸于周缪王，得骥、温骊、骅骝、騄耳之驷，西巡狩，乐而忘归。徐偃王作乱，造父为缪王御，长驱归周，一日千里以救乱。缪王以赵城封造父，造父族由此为赵氏。自蜚廉生季胜已下五世至造父，别居赵。赵衰其后也。恶来革者，蜚廉子也，蚤死。有子曰女防。女防生旁皋，旁皋生太几，太几生大骆，大骆生非子。以造父之宠，皆蒙赵城，姓赵氏。

　　非子居犬丘，好马及畜，善养息之。犬丘人言之周孝王，孝王召使主马于汧渭之闲，马大蕃息。孝王欲以为大骆适嗣。申侯之女为大骆妻，生子成为适。申侯乃言孝王曰：“昔我先郦山之女，为戎胥轩妻，生中潏，以亲故归周，保西垂，西垂以其故和睦。今我复与大骆妻，生适子成。申骆重婚，西戎皆服，所以为王。王其图之。”于是孝王曰：“昔伯翳为舜主畜，畜多息，故有土，赐姓嬴。今其后世亦为朕息马，朕其分土为附庸。”邑之秦，使复续嬴氏祀，号曰秦嬴。亦不废申侯之女子为骆适者，以和西戎。</p>`


let boxEle = document.querySelector(".box")
let preveHtml = boxEle.innerHTML
boxEle.innerHTML = htmlDom + preveHtml