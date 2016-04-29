import 'jquery-mobile/dist/jquery.mobile.min.css!';
import $ from 'jquery';
import 'jquery-mobile/dist/jquery.mobile.js';

$(document).ready(function() {
  $("body").css("visibility", "visible");
});

import {BrowserInfo} from './browserinfo';
var browserinfo = new BrowserInfo();

$.getJSON("db/browserinfo.json", function(data) {
  browserinfo.load(data);

  $("#browserinfohead").text(browserinfo.head());
  $("#browserinfotweet").html(browserinfo.tweet());
  $("#browserinfonavbar").navbar("destroy");
  $("#browserinfonavbar").navbar();

  var inputs = browserinfo.flaginputs();
  $("#browserinfogroup").controlgroup("container").append(inputs);
  $("#browserinfogroup input[type=checkbox]").checkboxradio();
  $("#browserinfogroup").controlgroup("refresh");

  $("#browserinfobody").html(browserinfo.body());

  $('#browserinfogroup input[type=checkbox]').change(function() {
    browserinfo.detection[this.name] = this.checked;
    $("#browserinfobody").html(browserinfo.body());
  });
});

import {HandlerInfo} from './handlerinfo';
var handlerlist = new HandlerInfo();

$.getJSON("handlers.json", function(data) {
  handlerlist.load(data);

  $("#handlerlist").append(handlerlist.listview());
  $("#handlerlist").listview("refresh");
  $("#handlerlistcount").text(handlerlist.count()).fadeIn();
});

var handlerinfolist = new HandlerInfo();

$.getJSON("db/handlerinfo.json", function(data) {
  handlerinfolist.load(data);

  $("#handlerinfolist").append(handlerinfolist.listview());
  $("#handlerinfolist").listview("refresh");

  $("#handlerinfolist input[type=url]").textinput();
  $("#handlerinfolist .ui-field-contain").fieldcontain();
  $("#handlerinfolist select").selectmenu();
  $("#handlerinfolist button[type=submit]").button();
  $("#handlerinfolist [data-role=collapsible]").collapsible();
  $("#handlerinfolist .dynamiclistview").listview();

  $("#handlerinfolistcount").text(handlerinfolist.count()).fadeIn();
});