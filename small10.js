builder.OpenFile("https://github.com/shao-wang-me/delete-me-later/raw/main/SmallFile10.docx");
var oDocument = Api.GetDocument();
oDocument.AcceptAllRevisionChanges();
oDocument.SetTrackRevisions(false);
builder.SaveFile("docx", "SmallFile10.docx");
builder.CloseFile();