builder.OpenFile("https://github.com/shao-wang-me/delete-me-later/raw/main/SmallFile3.docx");
var oDocument = Api.GetDocument();
oDocument.AcceptAllRevisionChanges();
oDocument.SetTrackRevisions(false);
builder.SaveFile("docx", "SmallFile3.docx");
builder.CloseFile();