builder.OpenFile("https://github.com/shao-wang-me/delete-me-later/raw/main/SmallFile2.docx");
var oDocument = Api.GetDocument();
oDocument.AcceptAllRevisionChanges();
oDocument.SetTrackRevisions(false);
builder.SaveFile("docx", "SmallFile2.docx");
builder.CloseFile();