// 傻逼99代码写得跟屎似的
import {  statSync, statSync_asset, stringToUTF8Array, utf8ArrayToString,writeFileSync,readFileSync,jzxcxmz,jzxcxlb} from "../../utils/v1.0/BandManger";
    Page({
        onInit(param) {
            
                // 禁止屏幕滚动
hmUI.setLayerScrolling(false);

// 设置屏幕常亮
hmApp.setScreenKeep(true);

// 注销手势事件
hmApp.unregisterGestureEvent();

// 设置亮度为600
hmSetting.setBrightScreen(600);

// 获取系统语言
const language = hmSetting.getLanguage();

// 根据语言设置对应的文本内容
if (language == 0 || language == 1) {
    var language_title_text = '应用锁';
    var language_ui_title_a1 = '加密成功后提示要重启的必须重启！';
    var language_title_text1 = '提示';
    var language_ui_title_a2 = '出现异常\n请退出重试';
    var language_yc = '已上锁';
    var language_UPDATE = '刷新';
    var language_MORE = '设置';
} else {
    var language_title_text = 'App Lock';
    var language_ui_title_a1 = 'If you are prompted to reboot after successful encryption, you must reboot!';
    var language_title_text1 = 'Tips';
    var language_ui_title_a2 = 'error\nplease exit and try again';
    var language_yc = 'Hide';
    var language_UPDATE = 'UPDATE';
    var language_MORE = 'Settings';
}

// 定义应用路径
const app_path = '/storage/js_apps';

// 读取应用列表
const [js_appsList, o] = hmFS.readdir(app_path);

// 初始化空数组n
var n = [];

// 读取AppUnlock_appid.txt文件的内容
var AppUnlock_appid = readFileSync('AppUnlock_appid.txt');

// 如果AppUnlock_appid等于'notfile'，则将其初始化为空对象
if (AppUnlock_appid == 'notfile'){
    AppUnlock_appid = {};
}else{
    // 否则将其解析为JSON对象
    AppUnlock_appid = JSON.parse(AppUnlock_appid);
}

var lookAppsList = jzxcxlb();
var lockedAppsList = []; // 用于存储已上锁的应用

// 遍历应用列表
for (var i = 0; i < lookAppsList.length; i++) {
    var app = lookAppsList[i];
    if (AppUnlock_appid[JSON.parse(utf8ArrayToString(test_buf).toString().replace(/\ +/g, ""))['app']["appId"].toString()]['type'] == "True") {
        app = JSON.parse(utf8ArrayToString(test_buf).toString().replace(/\ +/g, ""))['app']['name']
        lockedAppsList.push(app);
    }
    // 判断该应用是否已上锁
}
// 如果lookAppsList不等于'cxjr' 重新加入？99写的什么勾巴字符串
if (lookAppsList !== 'cxjr') {
    // 创建标题背景
    var title_background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 0,
        y: 0,
        w: 192,
        h: 60,
        radius: 0,
        color: 0x000000
    });

    // 创建标题文本
    var title_text = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 40,
        y: 0,
        w: 112,
        h: 70,
        color: 0xffffff,
        text_size: 20,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: language_title_text
    });

    // 创建标题左侧按钮
    const ui_title_left = hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 0,
        y: 62,
        w: 95,
        h: 36,
        radius: 0,
        normal_color: 0x000000,
        press_color: 0x262626,
        text: language_UPDATE,//"UPDATE",
        click_func: () => {
            hmApp.reloadPage({
                url: 'pages/tools/ApplicationLockListPage',
                param: '1'
            });
        }
    });

    // 创建标题右侧按钮
    const ui_title_right = hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 97,
        y: 62,
        w: 95,
        h: 36,
        radius: 0,
        normal_color: 0x000000,
        press_color: 0x262626,
        text: language_MORE,//"MORE",
        click_func: () => {
            hmApp.gotoPage({
                url: 'pages/config/AppLockMorePage',
                param: ''
            });
        }
    });

    // 定义列表项配置
    var item_config = [{
        type_id: 1,
        item_bg_color: 0x202124,
        item_bg_radius: 21,
        text_view: [{
            x: 10,
            y: 0,
            w: 150,
            h: 75,
            key: "text",
            text_size: 23,
            align_h: hmUI.align.LEFT,
            align_v: hmUI.align.CENTER_V,
            text_style: hmUI.text_style.NONE,
            color: 0xffffff
        }, {
            x: 162,
            y: 0,
            w: 20,
            h: 75,
            key: "icon",
            text_size: 23,
            align_h: hmUI.align.CENTER_H,
            align_v: hmUI.align.CENTER_V,
            text_style: hmUI.text_style.NONE,
            color: 0xbbbbbb
        }],
        text_view_count: 2,
        item_height: 133
    }];

    // 定义滚动列表的位置和宽度
    var ui_SCROLL_LIST_x = 0;
    var ui_SCROLL_LIST_w = 192;

    // 创建滚动列表
    const scrollList = hmUI.createWidget(hmUI.widget.SCROLL_LIST, {
        x: ui_SCROLL_LIST_x,
        y: 103,
        h: 10000,
        w: ui_SCROLL_LIST_w,
        item_space: 10,
        item_config: item_config,
        item_config_count: 1,
        data_array: lookAppsListed,
        data_count: lookAppsListed.length,
        data_type_config: [{
            start: 0,
            type_id: 1
        }],
        data_type_config_count: 1,
        item_click_func: function (item, index) {
            hmApp.gotoPage({
                // 设置需要跳转的页面URL，这里跳转到路径'pages/tools/ApplicationLockPage'对应的页面
                url: 'pages/tools/ApplicationLockPage',
                // 传递给新页面的参数，包含了`appPath`字段，其值为被点击的应用的路径
                // 使用JSON.stringify将对象转化为字符串，因为gotoPage函数只接受字符串类型的参数
                param: JSON.stringify({
                    // lookAppsList[index].path.toString()获取被点击应用的路径并转化为字符串
                    appPath: lookAppsList[index].path.toString()
                })
            });
        }
    });

    // 创建提示文本
    var ui_title_a1 = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 40,
        y: 440,
        w: 112,
        h: 40,
        color: 0xffffff,
        text_size: 17,
        align_h: hmUI.align.CENTER_H,
        align_v: hmUI.align.CENTER_V,
        text_style: hmUI.text_style.NONE,
        text: language_ui_title_a1
    });
}








// 下面是个人加的解析注释
// SCROLL_LIST_click用于处理滚动列表点击事件，参数index表示被点击项的索引
function SCROLL_LIST_click(index) {
    // 调用hmApp.gotoPage方法，跳转至新页面
    hmApp.gotoPage({
        // 设置需要跳转的页面URL，这里跳转到路径'pages/tools/ApplicationLockPage'对应的页面
        url: 'pages/tools/ApplicationLockPage',
        // 传递给新页面的参数，包含了`appPath`字段，其值为被点击的应用的路径
        // 使用JSON.stringify将对象转化为字符串，因为gotoPage函数只接受字符串类型的参数
        param: JSON.stringify({
            // lookAppsList[index].path.toString()获取被点击应用的路径并转化为字符串
            appPath: lookAppsList[index].path.toString()
        })
    });
}
// statSync函数用于同步获取文件状态信息，参数filename表示要获取状态的文件名
function statSync(filename) {
    // 调用hmFS.stat方法获取文件状态，这个方法返回一个包含文件状态和错误码的数组
    const [fs_stat, err] = hmFS.stat(filename);
    // 检查错误码，如果为0表示获取文件状态成功
    if (err == 0) {
        // 获取文件状态成功，返回文件状态对象
        return fs_stat;
    } else {
        // 获取文件状态失败，返回null 空值
        return null;
    }
}
function statSync_asset(filename) {
    // 获取文件的状态信息和错误码
    const [fs_stat, err] = hmFS.stat_asset(filename);

    if (err == 0) {
        // 如果错误码为0，表示没有错误，则返回文件的状态信息
        return fs_stat;
    } else {
        // 如果有错误发生，则返回null
        return null;
    }
}
                // 将字符串转换为UTF8编码的字节数组
function stringToUTF8Array(str) {
    if (!str)
        return false;

    let result = [];
    for (let i = 0, j = str.length; i < j; i++) {
        let code = str.charCodeAt(i);
        if (code <= 0x7f) {
            // 单字节字符直接添加到结果数组中
            result.push(code);
        } else if (code <= 0x7ff) {
            // 双字节字符拆分为高低两个字节，并按规则添加到结果数组中
            result.push((0xC0 | (0x1F & (code >> 6))));
            result.push((0x80 | (0x3F & code)));
        } else if (code <= 0xffff) {
            // 三字节字符拆分为高、中、低三个字节，并按规则添加到结果数组中
            result.push((0xE0 | (0x0F & (code >> 12))));
            result.push((0x80 | (0x3F & (code >> 6))));
            result.push((0x80 | (0x3F & code)));
        } else {
            // 对于四字节字符及以上，返回false表示转换失败
            return false;
        }
    }
    // 使用结果数组创建一个Uint8Array并返回
    return Uint8Array.from(result);
}
                /**
                * 将UTF8编码的字节数组转换为字符串
                * @param {Uint8Array} array - 要转换的UTF8编码的字节数组
                * @returns {string|false} 转换后的字符串，如果转换失败则返回false
                */
               function utf8ArrayToString(array) {
                   if (!array)
                       return false;
               
                   let result = "";
               
                   for (let i = 0, j = array.length; i < j; i++) {
                       let code = array[i];
               
                       if (code >= 0 && code <= 0x7f) {
                           // 单字节字符直接添加到结果字符串中
                           code = (0x7f & code);
                       } else if (code <= 0xdf) {
                           // 双字节字符拼接为Unicode字符，并添加到结果字符串中
                           code = ((0x1F & array[i]) << 6) | (0x3f & array[i + 1]);
                           i += 1;
                       } else if (code <= 0xef) {
                           // 三字节字符拼接为Unicode字符，并添加到结果字符串中
                           code = ((0x0f & array[i]) << 12) | ((0x3f & array[i + 1]) << 6) | (0x3f & array[i + 2]);
                           i += 2;
                       } else {
                           // 对于四字节字符及以上，返回false表示转换失败
                           return false;
                       }
               
                       let char = String.fromCharCode(code);
                       result += char;
                   }
               
                   // 返回转换后的字符串
                   return result;
               }
                /**
 * 同步写入文件
 * @param {string} filename - 保存数据的文件名
 * @param {string} data - 要写入的数据
 */
function writeFileSync(filename, data) {
    // 将字符串转换为UTF8编码的字节数组
    const source_buf = stringToUTF8Array(data);

    // 打开文件，如果不存在则创建新文件，并设置读写模式和截断方式
    const file = hmFS.open(filename, hmFS.O_CREAT | hmFS.O_RDWR | hmFS.O_TRUNC);

    // 定位文件指针到文件开头
    hmFS.seek(file, 0, hmFS.SEEK_SET);

    // 将UTF8编码的字节数组写入文件
    hmFS.write(file, source_buf.buffer, 0, source_buf.length);

    // 关闭文件
    hmFS.close(file);
}

                /**
 * 同步读取文件
 * @param {string} filename - 要读取的文件名
 * @returns {string|'notfile'} 读取的文件内容（如果文件存在），或者字符串'notfile'（如果文件不存在）
 */
function readFileSync(filename) {
    // 获取文件的状态信息
    const fs_stat = statSync(filename);

    // 如果文件不存在，则返回'notfile'
    if (!fs_stat) return 'notfile';

    // 获取文件的大小
    var size2 = fs_stat.size;

    // 定义一个空字符串用于保存读取的文件内容
    var e = '';

    // 创建一个指定大小的Uint8Array作为缓冲区
    var test_buf = new Uint8Array(size2);

    // 打开文件以只读方式
    var file = hmFS.open(filename, hmFS.O_RDONLY);

    // 从文件中读取数据到缓冲区
    hmFS.read(file, test_buf.buffer, 0, test_buf.length);

    // 关闭文件
    hmFS.close(file);

    // 将UTF8编码的字节数组转换为字符串
    e = utf8ArrayToString(test_buf);

    // 返回读取的文件内容
    return e;
}
                /**
 * 解析应用信息
 * @param {Object} ll - 文件状态信息对象
 * @param {string} app_path2 - 应用路径
 * @param {string} paths - 路径信息
 * @returns {false|string} 应用名称（如果解析成功），否则返回false
 */
function jzxcxmz(ll, app_path2, paths) {
    // 获取文件的大小
    var size2 = ll.size;

    // 定义一个空字符串用于保存读取的文件内容
    var e = '';

    // 创建一个指定大小的Uint8Array作为缓冲区
    var test_buf = new Uint8Array(size2);

    // 打开文件以只读方式
    var file = hmFS.open(app_path2, hmFS.O_RDONLY);
    
    // 从文件中读取数据到缓冲区
    hmFS.read(file, test_buf.buffer, 0, test_buf.length);

    // 关闭文件
    hmFS.close(file);

    // 将UTF8编码的字节数组转换为字符串
    e = utf8ArrayToString(test_buf);

    // 清理字符串，去除空格和换行符等
    var ey = e.toString().replace(/\ +/g, "");
    ey = ey.toString().replace(/[\r\n]/g, "");

    // 替换特殊值的格式
    ey = ey.toString().replace(":[]", ":\"[]\"");
    ey = ey.toString().replace(":false", ":\"false\"");
    ey = ey.toString().replace(":true", ":\"true\"");
    ey = ey.toString().replace(":False", ":\"False\"");
    ey = ey.toString().replace(":True", ":\"True\"");
    ey = ey.toString().replace(":None", ":\"None\"");
    ey = ey.toString().replace(":undefined", ":\"undefined\"");

    try {
        // 尝试解析字符串为JSON对象
        var ey_json = JSON.parse(ey);

        // 获取应用名称和应用ID
        var ybappname = ey_json['app']["appName"];
        var lsappid = ey_json['app']["appId"].toString();
        
        // 如果有一个aooid为49897的小程序，也就是环管，则返回false，就是环管的应用锁不能通过此方法显示
        if (lsappid == '49897') {
            return false;
        }

        try {
            // 根据语言选择更新应用名称
            if (language !== 0 && language !== 1) {
                ybappname = ey_json['i18n']['en-US']['appName'];
            }
        } catch (err) {}

        // 检查应用ID在AppUnlock_appid中的配置
        if (AppUnlock_appid[lsappid] !== undefined) {
            if (AppUnlock_appid[lsappid]['type'] == "True") {
                ybappname = ybappname + ' (' + language_yc + ')';
            }
        }
    } catch (err) {
        return false;
    }

    // 检查应用名称是否定义
    if (ybappname == undefined) {
        return false;
    }

    // 返回应用名称
    return ybappname;
}

  /**
 * 获取应用列表
 * @returns {Array|'cxjr'} 应用列表（如果获取成功），或者字符串'cxjr'（如果param为'1'）
 */
function jzxcxlb() {
    // 读取AppsLockList.txt文件的内容
    var AppsList = readFileSync('AppsLockList.txt');

    // 获取AppManger_cache参数的值
    var AppManger_cache = hmFS.SysProGetBool('AppManger_cache');

    // 如果AppsList等于'notfile'或者param等于'1'
    if (AppsList == 'notfile' || param == '1') {
        // 遍历js_appsList数组
        for (var r = 0; r < js_appsList.length; r++) {
            if (js_appsList[r] != 'data') {
                const paths = js_appsList[r];

                // 构建app.json路径
                var app_path2 = '../../../../../js_apps/' + js_appsList[r] + '/app.json';

                // 获取app.json的状态信息
                var fs_stat = statSync_asset(app_path2);

                // 如果app.json不存在，则尝试使用app.json.bak
                if (!fs_stat) {
                    app_path2 = '../../../../../js_apps/' + js_appsList[r] + '/app.json.bak';
                    fs_stat = statSync_asset(app_path2);
                    
                    // 如果app.json.bak也不存在，则继续下一个循环
                    if (!fs_stat) continue;
                }

                // 解析应用名称
                var lsbl = jzxcxmz(fs_stat, app_path2, paths);
                
                // 如果解析失败，则继续下一个循环
                if (lsbl == false) {
                    continue;
                }

                // 添加应用信息到n数组中
                n.push({
                    text: lsbl,
                    icon: "〉",
                    type: 1,
                    path: paths
                });
            }
        }

        // 如果AppManger_cache为true，则将n数组写入AppsLockList.txt文件
        if (AppManger_cache == true) {
            writeFileSync('AppsLockList.txt', JSON.stringify(n));
        }

        // 如果param等于'1'，则重新加载页面并返回'cxjr'
        if (param == '1'){
            hmApp.reloadPage({
                url: 'pages/tools/ApplicationLockListPage',
                param: '0'
            });
            return 'cxjr';
        }

        // 返回n数组作为应用列表
        return n;
    } else {
        // 将AppsList解析为JSON对象返回
        return JSON.parse(AppsList);
    }
}


        }
    });
