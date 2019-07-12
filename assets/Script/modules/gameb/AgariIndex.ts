import { Logger } from "../lobby/lcore/LCoreExports";

const indexStrMap: { [key: number]: string } = {
    [11]: "一万", //万子
    [12]: "二万",
    [13]: "三万",
    [14]: "四万",
    [15]: "五万",
    [16]: "六万",
    [17]: "七万",
    [18]: "八万",
    [19]: "九万",
    [21]: "一条", //索子
    [22]: "二条",
    [23]: "三条",
    [24]: "四条",
    [25]: "五条",
    [26]: "六条",
    [27]: "七条",
    [28]: "八条",
    [29]: "九条",
    [31]: "一筒", //筒子
    [32]: "二筒",
    [33]: "三筒",
    [34]: "四筒",
    [35]: "五筒",
    [36]: "六筒",
    [37]: "七筒",
    [38]: "八筒",
    [39]: "九筒",

    [41]: "东", //东
    [42]: "南", //南
    [43]: "西", //西
    [44]: "北", //北
    [51]: "中", //中
    [52]: "白", //白
    [53]: "发", //发

    [61]: "春", //春
    [62]: "夏", //夏
    [63]: "秋", //秋
    [64]: "冬", //冬
    [65]: "梅", //梅
    [66]: "兰", //兰
    [67]: "竹", //竹
    [68]: "菊" //菊
};
const indexMap: { [key: number]: string } = {
    [11]: "1", //万子
    [12]: "2",
    [13]: "3",
    [14]: "4",
    [15]: "5",
    [16]: "6",
    [17]: "7",
    [18]: "8",
    [19]: "9",
    [21]: "11", //索子
    [22]: "12",
    [23]: "13",
    [24]: "14",
    [25]: "15",
    [26]: "16",
    [27]: "17",
    [28]: "18",
    [29]: "19",
    [31]: "21", //筒子
    [32]: "22",
    [33]: "23",
    [34]: "24",
    [35]: "25",
    [36]: "26",
    [37]: "27",
    [38]: "28",
    [39]: "29",

    [41]: "31", //东
    [42]: "32", //南
    [43]: "33", //西
    [44]: "34", //北
    [51]: "41", //中
    [52]: "43", //白
    [53]: "42", //发

    [61]: "55", //春
    [62]: "56", //夏
    [63]: "57", //秋
    [64]: "58", //冬
    [65]: "51", //梅
    [66]: "52", //兰
    [67]: "53", //竹
    [68]: "54" //菊
};
/**
 * 牌id 跟 图片名映射
 */
export namespace AgariIndex {
    export const tileId2ArtId = (tileID: number): string => {
        const artId = indexMap[tileID];
        if (artId == null) {
            Logger.debug(`no art id for tile:${tileID}`);
            // throw Error(`no art id for tile:${tileID}`);
        }

        return artId;
    };

    export const tileId2Str = (tileID: number): string => {
        const artStr = indexStrMap[tileID];
        if (artStr == null) {
            Logger.debug(`no art id for tile:${tileID}`);
            // throw Error(`no art id for tile:${tileID}`);
        }

        return artStr;
    };
}
