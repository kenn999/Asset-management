function myFunction() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    //「フォームの回答」シートを代入
    var sheetAnser = ss.getSheetByName('棚卸しデータ');
    
    //「備品管理表」シートを代入
    var sheetKanri = ss.getSheetByName('備品管理表');
    
    
    //最終行を取得
    var sheetAnserlastRow = sheetAnser.getLastRow();
    var sheetKanrilastRow = sheetKanri.getLastRow();
    
    //2列目、最終行のセルの値を取得。つまり資産管理番号欄のデータを取得
    var data = sheetAnser.getRange(sheetAnserlastRow, 2).getValue();
    
    //今日の日付を代入
    var date = new Date();
    
    //備品管理表の最初の行から最終行までフォーム回答シートに記載された資産管理番号を検索し、一致する番号があると今日の日付を記入する
    for(var i=1;i<=sheetKanrilastRow;i++){
      if(sheetKanri.getRange(i, 2).getValue()=== data){
        sheetKanri.getRange(i, 14).setValue(date);
      
      }
      
      
    }
    
  }