var reportsWidget = {
    options: {
        containerSelector: '.reports',
        template: (
            '{{#.}}' +
                '<article class="reports_item">' +
                    '<a href="{{cover}}" target="_blank">' +
                        '<img class="reports_cover" src="{{cover}}" alt="{{title}} Cover"/>' +
                    '</a>' +
                    '<footer class="reports_docs">' +
                        '{{#documents}}' +
                            '<h3 class="reports_title">' +
                                '<a href="{{url}}" target="_blank">{{title}}' + 
                                    '<span> ({{file_size}} {{file_type}})' +
                                    '</span>' + 
                                '</a>' +
                            '</h3>' +
                        '{{/documents}}' +
                    '</footer>' +
                '</article>' +
            '{{/.}}'
        )
    },

    init: function() {
        this.renderReports(reportData || []);
    },

    renderReports: function(reports) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, reports));
    }
};

reportsWidget.init();


//Possible way to refactor 
//This way we keep the code more maintainable, readable and reusable
// var reportsWidget = {
//     fileName: "main",
//     data: reportData,
//     containerSelector: ".reports",
//   };
  
//   function renderMustacheTemplate({ fileName, data, containerSelector }) {
//     fetch(`./templates/${fileName}.mustache`)
//       .then((response) => response.text())
//       .then((template) => {
//         var rendered = Mustache.render(template, data || []);
//         document.querySelector(containerSelector).innerHTML = rendered;
//       });
//   }

// renderMustacheTemplate(reportsWidget);