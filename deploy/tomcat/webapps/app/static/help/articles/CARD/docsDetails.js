const docsDetails = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<!--[if IE]><meta http-equiv="X-UA-Compatible" content="IE=edge"><![endif]-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="generator" content="Asciidoctor 1.5.2">
<title>Вкладка «Детали» документа</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:300,300italic,400,400italic,600,600italic%7CNoto+Serif:400,400italic,700,700italic%7CDroid+Sans+Mono:400">

</head>
<body class="article">
<div id="header">
<h1>Вкладка «Детали» документа</h1>
</div>
<div id="content">
<div id="preamble">
<div class="sectionbody">
<div class="paragraph">
<p>Вкладка содержит основную информацию о документе.</p>
</div>
<div class="paragraph">
<p>Обязательные для заполнения поля отмечены <span class="red">*</span>.</p>
</div>
<div class="paragraph">
<p>В зависимости от вида документа набор полей может меняться
(настраивается Администратором).</p>
</div>
<div class="paragraph">
<p><em>Представленный ниже набор полей соответствует виду документа «Письмо»</em>.</p>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/DocsDetails.png" alt="DocsDetails"></span></p>
</div>
</div>
</div>
<div class="sect1">
<h2 id="_пользовательские_поля_и_чек_боксы">Пользовательские поля и чек-боксы:</h2>
<div class="sectionbody">
<div class="ulist circle">
<ul class="circle">
<li>
<p>поля «<strong>Регистрационный номер</strong>», «<strong>Дата регистрации</strong>» и «<strong>В ответ на</strong>» – отображаются
если документ уже прошел процесс регистрации;</p>
</li>
<li>
<p>поле «<strong>Вид</strong>» – наименование вида документа, который заполняется автоматически,
в зависимости от того, какой вид документа был выбран при создании карточки;</p>
</li>
<li>
<p>поле «<strong>Тек. процесс</strong>» – название текущего процесса, в рамках которого ведется
работа по данному документу;</p>
</li>
<li>
<p>поле «<strong>Состояние</strong>» – заполняется и изменяется автоматически при изменении состояния
документа (при нажатии на ссылку с названием состояния осуществляется переход к 
  диаграмме процесса);</p>
</li>
<li>
<p>поле «<strong>Номер</strong>» – номер документа заполняется автоматически в соответствии с 
заданной нумерацией документов в Системе, однако может быть введен пользователем вручную;</p>
</li>
<li>
<p>поле «<strong>Дата</strong>» – дата создания документа заполняется автоматически, но может быть
изменена пользователем вручную;</p>
</li>
<li>
<p>поле «<strong>Тема</strong>» – текстовое поле, в котором указывается основная тема документа
(например, о чем говорится в письме);</p>
</li>
<li>
<p>поле «<strong>Организация</strong>» – по умолчанию заполняется организацией, к которой относится
Автор документа;</p>
</li>
<li>
<p>поле «<strong>Подразделение</strong>» – по умолчанию заполняется значением подразделения, к
 которому относится Автор документа;</p>
</li>
<li>
<p>поле «<strong>Основание</strong>» – содержит название и номер задачи, документа, договора или 
совещания, послужившего основанием для создания текущего документа.<br>
  При создании документа на основании либо при заполнении поля
«Основание» Система предлагает скопировать вложения в подчиненную
карточку;</p>
</li>
<li>
<p>поле «<strong>Категория</strong>» – название категории, к которой относится создаваемый документ
(выбирается из справочника «Категории документов»);</p>
</li>
<li>
<p>поле «<strong>Куратор</strong>» – выбор имени сотрудника, курирующего работу над данным документом.<br>
  По умолчанию заполняется фамилией Автора документа, но может быть
изменено вручную. Выбранному сотруднику предоставляется доступ к
просмотру этой карточки.</p>
</li>
<li>
<p>поле «<strong>Содержание</strong>» – текстовое поле, содержащее любую необходимую информацию
о документе;</p>
</li>
<li>
<p>чек-бокс «<strong>Доступ к карточке-основанию</strong>» – при установленном признаке Исполнитель
получит возможность перейти по <span class="noBorder"><span class="image"><img src="img/ButtonSearch.svg" alt="ButtonSearch"></span></span> в карточку, указанную
в поле «Основание».<br>
  Признак появляется после включения в настройках Администратором.<br>
  Доступ к основанию появляется у всех участников и руководителей
подразделения и руководителей департамента Исполнителя;</p>
</li>
<li>
<p>чек-бокс «<strong>Документ доступен всем</strong>» – разрешает просмотр документа всем
пользователям Системы вне зависимости от настроек доступа (по умолчанию этот
признак скрыт и включается Администратором в настройках).<br>
  Если карточка документа содержит вложения, в нижней части вкладки
отображается список вложенных файлов. При нажатии на ссылку в списке
файл будет открыт.<br>
  В нижней части экрана документа отображается также журнал действий,
который содержит информацию об изменениях состояния документа в процессе его
выполнения.</p>
</li>
</ul>
</div>
<div class="paragraph">
<p><span class="image"><img src="img/DocsActionLog.png" alt="DocsActionLog"></span></p>
</div>
<div class="paragraph">
<p>Для просмотра записи журнала действий необходимо нажать на ссылку в
столбце «Дата поступления».</p>
</div>
</div>
</div>
</div>
<div id="footer">
<div id="footer-text">
Last updated 2020-12-18 08:42:58 └Ёрсёъюх тЁхь  (чшьр)
</div>
</div>
</body>
</html>`;