builder.OpenFile("https://github.com/shao-wang-me/delete-me-later/raw/main/SmallFile8.docx");
var oDocument = Api.GetDocument();
oDocument.AcceptAllRevisionChanges();
oDocument.SetTrackRevisions(false);
builder.SaveFile("docx", "SmallFile8.docx");
builder.CloseFile();