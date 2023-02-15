builder.OpenFile("https://github.com/shao-wang-me/delete-me-later/raw/main/SmallFile7.docx");
var oDocument = Api.GetDocument();
oDocument.AcceptAllRevisionChanges();
oDocument.SetTrackRevisions(false);
builder.SaveFile("docx", "SmallFile7.docx");
builder.CloseFile();