import {Component, OnInit, ViewChild} from '@angular/core';
import {DocumentListComponent} from '@alfresco/adf-content-services';
import {NotificationService, ViewerComponent} from '@alfresco/adf-core';
import {NodeEntry} from 'alfresco-js-api';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  @ViewChild(DocumentListComponent)
  documentList: DocumentListComponent;
  @ViewChild(ViewerComponent)
  documentViewer: ViewerComponent;

  parentFolderId: string;

  constructor(private notificationService: NotificationService,
              private router: Router,
              private route: ActivatedRoute,
              private location: Location) {
    console.log(this.route.snapshot.params['id']);
    this.parentFolderId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
  }

  uploadSuccess(event: any) {
    this.notificationService.openSnackMessage('File uploaded');
    this.documentList.reload();
  }

  showPreview(node: NodeEntry) {
    if (node && node.entry.isFile) {
      console.log(node.entry);
      this.router.navigate(['/node', node.entry.id])
        .catch(() => this.notificationService.openSnackMessage('Error loading node'));
    }
  }

  updateUrl(folderId: string) {
    this.location.replaceState(`/library/${folderId}`);
  }
}
