builder.OpenFile("https://github.com/shao-wang-me/delete-me-later/raw/main/SmallFile4.docx");
var oDocument = Api.GetDocument();
oDocument.AcceptAllRevisionChanges();
oDocument.SetTrackRevisions(false);
builder.SaveFile("docx", "SmallFile4.docx");
builder.CloseFile();