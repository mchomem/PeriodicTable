Index = {
    self:this

    , init: function() {
        self.$periodicTable = document.getElementById('periodicTable');
        self.$periodicTable.style.borderCollapse = 'collapse';
        self.$divAtomicNumber = document.getElementById('divAtomicNumber');
        self.$divChemicalSymbol = document.getElementById('divChemicalSymbol');
        self.$divElementName = document.getElementById('divElementName');
        self.$divAtomicWeight = document.getElementById('divAtomicWeight');
        this.load();
    }

    , load: function() {
        var num = 0;
        var aux = 56;
        var aux2 = 88;
        var row = 10;
        var col = 18;

        for(var r = 0; r < row; r++) {
            var tr = self.$periodicTable.insertRow(r);
            for(var c = 0; c < col; c++) {
                var td = tr.insertCell(c);
                if(c >= 1 && c <= 16 && r == 0) {
                    td.innerHTML = '';
                } else if(c >= 2 && c <= 11 && (r == 1 || r == 2)) {
                    td.innerHTML = '';
                } else if(c == 2 && (r == 5)) {
                    td.innerHTML = '';
                    num = 71;
                } else if(c == 2 && (r == 6)) {
                    td.innerHTML = '';
                    num = 103;
                } else if(r == 7) {
                    td.innerHTML = '';
                    Index.applyCss(td, c, r);
                } else if(c >= 0 && c <= 2 && (r == 8 || r == 9)) {
                    td.innerHTML = '';
                } else if(c >= 2 && c <= 17 && (r == 8)) {
                    Index.applyCss(td, c, r);
                    Index.setCell(td, ++aux);
                } else if(c >= 2 && c <= 17 && (r == 9)) {
                    Index.applyCss(td, c, r);
                    Index.setCell(td, ++aux2);
                } else {
                    Index.applyCss(td, c, r);
                    Index.setCell(td, ++num);
                }

                td.addEventListener('click', function() {
                    self.$divAtomicNumber.innerHTML = this.children[0].children[0].innerHTML;
                    self.$divChemicalSymbol.innerHTML = this.children[0].children[1].innerHTML;
                    self.$divElementName.innerHTML = this.children[0].children[2].innerHTML;
                    self.$divAtomicWeight.innerHTML = this.children[0].children[3].innerHTML;
                });
            }            
        }
    }

    , applyCss: function(td, c, r) {
        if(r == 7) {
            td.style.height = '20px';
            return;
        }

        td.style.cursor = 'pointer';
        td.style.height = '50px';
        td.style.width = '50px';
        td.style.border = '1px solid black';

        // Background colors
        if(c == 0 && r == 0 ) {
            td.style.backgroundColor = '#ccffcc';
        }

        if( (c == 0 || c == 1)
            && (r == 1 || r == 2 || r == 3 || r == 4 || r == 5 || r == 6) ) {
            td.style.backgroundColor = '#ccffcc';
        }

        if(c == 17 && r == 0) {
            td.style.backgroundColor = '#ffff99';
        }

        if( (c == 12 || c == 13 || c == 14 || c == 15 || c == 16 || c == 17)
            && (r == 1 || r == 2 || r == 3 || r == 4 || r == 5 || r == 6) ) {
            td.style.backgroundColor = '#ffff99';
        }

        if(c == 2 && (r == 3 || r == 4)) {
            td.style.backgroundColor = '#ff9999';
        }

        if( (c == 3 || c == 4 || c == 5 || c == 6 || c == 7 || c == 8 || c == 9 || c == 10 || c == 11)
            && (r == 3 || r == 4 || r == 5 || r == 6) ) {
            td.style.backgroundColor = '#ff9999';
        }

        if( (c == 3 || c == 4 || c == 5 || c == 6 || c == 7 || c == 8 || c == 9 || c == 10 || c == 11 || c == 12 || c == 13 || c == 14 || c == 15 || c == 16 || c == 17)
            && (r == 8 || r == 9) ) {
            td.style.backgroundColor = '#8080ff';
        }
    }

    , setCell: function(td, id) {
        var div = document.createElement('div');
        div.style.fontSize = '8px';
        div.style.fontFamily = 'verdana';
        div.style.textAlign = 'center';

        var div1 = document.createElement('div');
        var div2 = document.createElement('div');
        div2.style.fontSize = '14px';
        div2.style.fontWeight = 'bold';
        var div3 = document.createElement('div');
        var div4 = document.createElement('div');

        div.append(div1);
        div.append(div2);
        div.append(div3);
        div.append(div4);

        var data = ElementProvider.find(id);
        div1.innerHTML = (data != undefined ? data.atomicNumber : '0');
        div2.innerHTML = (data != undefined ? data.symbol : '...');
        div3.innerHTML = (data != undefined ? data.name : '........');
        div4.innerHTML = (data != undefined ? data.atomicWeight : '00000');
        
        td.append(div);
    }
}
