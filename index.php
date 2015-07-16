<?php
//设置错误级别
error_reporting(0);
/** ///调试、找错时请去掉///前空格
ini_set('display_errors',true);
error_reporting(E_ALL); 
set_time_limit(0);
define('DEBUG',	true);
// */

// # 判断PHP版本是否满足
if(version_compare(PHP_VERSION, '5.3.0', '<'))  exit('require PHP > 5.3.0 !');

//安装检查开始：如果您已安装过ThinkSNS，可以删除本段代码
if(is_dir('install/') && !file_exists('install/install.lock')){
	header('location:' . 'install/install.php');
}
//安装检查结束

// //禁止前台访问后台，使用后台入口index.php
// if($_REQUEST['app']=='admin'){
// 	exit;
// }

//网站根路径设置
define('SITE_PATH', dirname(__FILE__));

//载入核心文件
require(SITE_PATH.'/core/core.php');

//实例化一个网站应用实例
$App = new App();
$App->run();
