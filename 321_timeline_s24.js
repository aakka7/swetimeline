  google.charts.load("current", {packages:["timeline"]});
  google.charts.setOnLoadCallback(drawChart);
	window.addEventListener('resize', refreshChart);

  let chartwidth = window.innerWidth - 30;

  const button_1x = document.createElement('button')
  const button_2x = document.createElement('button')
  const button_3x = document.createElement('button')

  button_1x.innerText = 'Zoom - Screen Width'
  button_1x.id = '1xZoom'
  button_2x.innerText = 'Zoom - 200%'
  button_2x.id = '2xZoom'
  button_3x.innerText = 'Zoom - 300%'
  button_3x.id = '3xZoom'

  button_1x.addEventListener('click', () => {
    chartwidth = window.innerWidth - 30;
    drawChart();
  })

  button_2x.addEventListener('click', () => {
    chartwidth = window.innerWidth * 2;
    drawChart();
  })

  button_3x.addEventListener('click', () => {
    chartwidth = window.innerWidth * 3;
    drawChart();
  })

  document.body.appendChild(button_1x)
  document.body.appendChild(button_2x)
  document.body.appendChild(button_3x)

  function refreshChart() {
    chartwidth = window.innerWidth - 30;
    drawChart();
  }
  
  function ExtendCurrent(div, isInline){
    var len = 0;
    $('#'+div+' rect').each(function(index) {
      yVal = parseFloat($(this).attr('y'));
      xVal = parseFloat($(this).attr('x'));
      if ( xVal == 0 && yVal == 0 ) { len = parseFloat($(this).attr('height')) };
    });

    $('#'+div+' text:contains("TIME")').css('font-size','11px').attr('fill','#A6373C').prev('rect').attr('height',len+'px').attr('width','3px').attr('y','0').attr('fill','#AA0000');

    if (isInline != -1) {
      if ( 0 == isInline )
        $('.google-visualization-tooltip').css('display','none');
      else
        $('.google-visualization-tooltip').css('display','inline');
    }
  }

  function doDate(year, month, day, hour, minute) {
    date = new Date(year,month - 1,day,hour,minute);
    return date;
  }

  function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn({ type: 'string', id: 'Type' });
    dataTable.addColumn({ type: 'string', id: 'Name' });
//    dataTable.addColumn({ type: 'string', role: 'tooltip' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    timenow = new Date();
    starttime = doDate(2024,1,15,0,0);
    endtime = doDate(2024,5,9,23,59);
    if(timenow < starttime) {
      displaytime = starttime;
      timelabel = "TIME - Beginning of Semester: "
    }
    else if(timenow > endtime) {
      displaytime = endtime;
      timelabel = "TIME - End of Semester: "
    }
    else {
      displaytime = timenow;
      timelabel = "TIME - NOW: "
    }
dataTable.addRows([
   [ 'Time', timelabel + '[' + displaytime + ']', displaytime, displaytime],
   // Sprints
   [ 'Sprints', 'Sprint 0',     doDate(2024,1,28,0,0),  doDate(2024,2,24,23,59) ],
   [ 'Sprints', 'Sprint 1',     doDate(2024,2,25,0,0),  doDate(2024,3,16,23,59) ],
   [ 'Sprints', 'Sprint 2',     doDate(2024,3,17,0,0), doDate(2024,3,30,23,59) ],
   [ 'Sprints', 'Sprint 3',     doDate(2024,3,31,0,0), doDate(2024,4,13,23,59) ],
   [ 'Sprints', 'Sprint 4',     doDate(2024,4,14,9,30),  doDate(2024,4,20,23,59) ],
   // Deliverables 
   [ 'Deliverables', 'P0',         doDate(2024,1,21,0,0),  doDate(2024,1,27,20,0)],
   [ 'Deliverables', 'P1 [tentative]',         doDate(2024,1,28,0,0),   doDate(2024,2,17,23,59) ],
   [ 'Deliverables', 'P2 [tentative]',         doDate(2024,2,18,0,0),  doDate(2024,3,2,23,59) ],
   [ 'Deliverables', 'P3 [tentative]',         doDate(2024,3,3,0,0),  doDate(2024,3,23,23,59) ],
   [ 'Deliverables', 'P4 [tentative]',         doDate(2024,3,24,0,0),  doDate(2024,4,12,23,59) ],
   [ 'Deliverables', 'P5 [tentative]',         doDate(2024,4,13,0,0),  doDate(2024,4,20,23,59) ],
   [ 'Deliverables', 'W1',         doDate(2024,1,28,0,0),  doDate(2024,2,10,23,55) ],
   [ 'Deliverables', 'W2 (draft) [tentative]',         doDate(2024,2,11,0,0),   doDate(2024,2,24,23,59) ],
   [ 'Deliverables', 'W2 (final)  [tentative]',         doDate(2024,2,25,0,0),   doDate(2024,4,6,23,59) ],
   [ 'Deliverables', 'W3 [tentative]',         doDate(2024,4,7,0,0),   doDate(2024,4,27,23,59) ],
   // Lecture Topics 
   [ 'Lecture Topics', 'Intro, SW Processes',       				doDate(2024,1,16,0,0),  doDate(2024,1,20,23,59) ],
   [ 'Lecture Topics', 'SW Processes, Proj. Management (Intro)',    doDate(2024,1,21,0,0),  doDate(2024,1,27,23,59) ],
   [ 'Lecture Topics', 'Agile, Designing for the User',       		doDate(2024,1,28,0,0),  doDate(2024,2,3,23,59) ],
   [ 'Lecture Topics', 'Requirement Eng., Agile RE Use Cases',      doDate(2024,2,4,0,0),  doDate(2024,2,10,23,59) ],
   [ 'Lecture Topics', 'Software Architecture',       				doDate(2024,2,11,9,30),  doDate(2024,2,17,23,59) ],
   [ 'Lecture Topics', 'Software Design',       					doDate(2024,2,18,9,30),  doDate(2024,2,24,23,59) ],
   [ 'Lecture Topics', 'Software Testing',     						doDate(2024,2,25,9,30),  doDate(2024,3,2,23,59) ],
   [ 'Lecture Topics', 'SCM, Project Management',      				doDate(2024,3,10,9,30),  doDate(2024,3,16,23,59) ],
   [ 'Lecture Topics', 'SW Quality, Process Improvement',       	doDate(2024,3,17,9,30),  doDate(2024,3,23,23,59) ],
   [ 'Lecture Topics', 'S/W Reuse, Evolution',       				doDate(2024,3,24,9,30),  doDate(2024,3,30,23,59) ],
   [ 'Lecture Topics', 'TBD',       								doDate(2024,3,31,9,30),  doDate(2024,4,6,23,59) ],
   [ 'Lecture Topics', 'TBD',       								doDate(2024,4,7,9,30),  doDate(2024,4,13,23,59) ],
   [ 'Lecture Topics', 'Demos',       								doDate(2024,4,14,9,30),  doDate(2024,4,20,23,59) ],
   [ 'Lecture Topics', 'Final Review',       						doDate(2024,4,21,9,30),  doDate(2024,4,27,23,59) ],
   [ 'Holidays', 'Spring Break',    								doDate(2024,3,4,0,0),   doDate(2024,3,8,23,59) ],
   // Special Topics
   [ 'Special Dates', 'Add',   doDate(2024,1,16,6,0),  doDate(2024,1,23,23,59) ],
   [ 'Special Dates', 'Drop',     doDate(2024,1,24,6,0),  doDate(2024,1,30,23,59) ],
   [ 'Special Dates', '50%',   doDate(2024,1,31,6,0),  doDate(2024,2,6,23,59) ],
   [ 'Special Dates', 'Withdrawal',   doDate(2024,2,7,6,0),   doDate(2024,2,20,23,59) ],
   [ 'Special Dates', 'Selective Withdrawal', doDate(2024,2,21,6,0), doDate(2024,3,25,23,59) ],
   [ 'Special Dates', 'Reading Day', doDate(2024,4,30,6,0),  doDate(2024,4,30,23,59) ],
   [ 'Special Dates', 'Finals Week',    doDate(2024,5,1,7,30),  doDate(2024,5,8,23,59) ]]);


    var options = {
      timeline: { colorByRowLabel: true },
      width: chartwidth
//     backgroundColor: '#ffd'
//      alternatingRowStyle: false
    };
var formatDate = new google.visualization.DateFormat({
pattern: 'MMM dd, hh:mm a'
});
  dataTable.insertColumn(2, { type: 'string', role: 'tooltip', p: {html: true} });
  for (var i = 0; i < dataTable.getNumberOfRows(); i++) {
    var duration = Math.abs(dataTable.getValue(i, 4).getTime() - dataTable.getValue(i, 3).getTime()) / 1000;
    var days = Math.floor(duration / 86400);
    duration -= days * 86400;
    var hours = Math.floor(duration / 3600) % 24;
    duration -= hours * 3600;
    var minutes = Math.floor(duration / 60) % 60;

    var tooltip = '';
    tooltip += '<div class="ggl-tooltip"><div>';
    if(dataTable.getValue(i, 1) == "Withdrawal")
      tooltip += '<span>' + "Unrestricted Withdrawal Period" + '</span>';
    else if(dataTable.getValue(i, 1) == "Selective Withdrawal")
      tooltip += '<span>' + "Selective Withdrawal Period" + '</span>';
    else if(dataTable.getValue(i, 1) == "50%")
      tooltip += '<span>' + "Drop - 50% Tuition Refund" + '</span>';
    else if(dataTable.getValue(i, 1) == "Add")
      tooltip += '<span>' + "Add Period (Deadline is End of Day)" + '</span>';
    else if(dataTable.getValue(i, 1) == "Drop")
      tooltip += '<span>' + "Drop Period (Deadline is End of Day)" + '</span>';
    else if(dataTable.getValue(i, 1) == "P0" || dataTable.getValue(i, 1) == "P0 [tentative]")
      tooltip += '<span>' + "P0: Team Formation Report" + '</span>';
    else if(dataTable.getValue(i, 1) == "P1" || dataTable.getValue(i, 1) == "P1 [tentative]")
      tooltip += '<span>' + "P1: Requirements document" + '</span>';
    else if(dataTable.getValue(i, 1) == "P2" || dataTable.getValue(i, 1) == "P2 [tentative]")
      tooltip += '<span>' + "P2: Software Architecture document" + '</span>';
    else if(dataTable.getValue(i, 1) == "P3" || dataTable.getValue(i, 1) == "P3 [tentative]")
      tooltip += '<span>' + "P3: Software Design document" + '</span>';
    else if(dataTable.getValue(i, 1) == "P4" || dataTable.getValue(i, 1) == "P4 [tentative]")
      tooltip += '<span>' + "P4: Implementation deliverable" + '</span>';
    else if(dataTable.getValue(i, 1) == "P5" || dataTable.getValue(i, 1) == "P5 [tentative]")
      tooltip += '<span>' + "P5: Testing deliverable" + '</span>';
    else if(dataTable.getValue(i, 1) == "W1" || dataTable.getValue(i, 1) == "W1 [tentative]")
      tooltip += '<span>' + "Writing Assignment 1 (Individual): Usability Evaluation " + '</span>';
    else if(dataTable.getValue(i, 1) == "W2 (final)" || dataTable.getValue(i, 1) == "W2 (final) [tentative]")
      tooltip += '<span>' + "Writing Assignment 2 (final)" + '</span>';
    else if(dataTable.getValue(i, 1) == "W2 (draft)" || dataTable.getValue(i, 1) == "W2 (draft) [tentative]")
      tooltip += '<span>' + "Writing Assignment 2 (draft)" + '</span>';
    else if(dataTable.getValue(i, 1) == "W3" || dataTable.getValue(i, 1) == "W3 [tentative]")
      tooltip += '<span>' + "Writing Assignment 3 - Project Report" + '</span>';
    else if(dataTable.getValue(i, 1) == "Sprint 0")
      tooltip += '<span>' + "Sprint 0 - Start exploring and learning the various technologies that you will be using. Document sprint plan on the team wiki page. Meet with GTA at the end." + '</span>';
	else if(dataTable.getValue(i, 1) == "Sprint 1")
      tooltip += '<span>' + "Sprint 1 - Start implementation and testing this week if it has not started. Document sprint plan on the team wiki page. Meet with GTA at the end." + '</span>';
	else if(dataTable.getValue(i, 1) == "Sprint 2")
      tooltip += '<span>' + "Sprint 2 - Continue implementation and testing. Document sprint plan on the team wiki page. Meet with GTA at the end." + '</span>';
	else if(dataTable.getValue(i, 1) == "Sprint 3")
      tooltip += '<span>' + "Sprint 3 - Your team should be in the final stages of implementation and testing. Document Sprint plan on the team wiki page. Meet with GTA at the end." + '</span>';
	else if(dataTable.getValue(i, 1) == "Sprint 4")
      tooltip += '<span>' + "Sprint 4 - Wrap up project before demo." + '</span>';
    else
      tooltip += '<span>' + dataTable.getValue(i, 1) + '</span>';
    tooltip += '</div><div>';
    tooltip += '<span>' + dataTable.getValue(i, 0) + ':&nbsp;</span>';
    tooltip += formatDate.formatValue(dataTable.getValue(i, 3)) + ' - ';
    tooltip += formatDate.formatValue(dataTable.getValue(i, 4));
    tooltip += '</div><div>';
    tooltip += '<span>Duration:&nbsp;</span>';
    tooltip += days + ' days ' + hours + ' hours ' + minutes + ' minutes ';
    tooltip += '</div></div>';
    dataTable.setValue(i, 2, tooltip);
  }

  var observer = new MutationObserver(setBorderRadius);
  google.visualization.events.addListener(chart, 'ready', function () {
    setBorderRadius();
    observer.observe(container, {
      childList: true,
      subtree: true
    });
  });

  function setBorderRadius() {
    Array.prototype.forEach.call(container.getElementsByTagName('rect'), function (rect) {
      if (parseFloat(rect.getAttribute('x')) > 0) {
        rect.setAttribute('rx', 3);
        rect.setAttribute('ry', 3);
      }
    });
  }

    chart.draw(dataTable, options);
    ExtendCurrent('timeline', -1);
    google.visualization.events.addListener(chart, 'onmouseover', function(obj) {
        ExtendCurrent('timeline', obj.row);
        });
    google.visualization.events.addListener(chart, 'onmouseout', function(obj) {
        ExtendCurrent('timeline', -1);
        });
  }