import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MinimalNodeEntryEntity} from 'alfresco-js-api';
import {ActivatedRoute, Router} from '@angular/router';
import {NodesApiService, ThumbnailService} from '@alfresco/adf-core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-node-view',
  templateUrl: './node-view.component.html',
  styleUrls: ['./node-view.component.css']
})
export class NodeViewComponent {
  @Input()
  viewNode: MinimalNodeEntryEntity;

  @Input()
  parentLibraryNode: MinimalNodeEntryEntity;

  @Output()
  OnBack: EventEmitter<string>;

  errorMessage: string;
  mimetypeIconUrl: string;

  constructor(private service: NodesApiService,
              private route: ActivatedRoute,
              private router: Router,
              private thumbNailService: ThumbnailService,
              private location: Location) {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.service.getNode(id)
        .subscribe(node => {
            this.viewNode = node;
            this.mimetypeIconUrl = thumbNailService.getMimeTypeIcon(node.content.mimeType);
            this.service.getNode(this.viewNode.parentId)
              .subscribe(folderNode => this.parentLibraryNode = folderNode);
          },
          () => {
            const message = `cannot find node with id: ${id}`;
            console.error(message);
            this.errorMessage = message;
          });
    }
  }

  onBackButtonClick(node) {
    if (this.OnBack) {
      this.OnBack.emit(node.parentId);
    } else if (node) {
      this.router.navigate(['/library', node.parentId || '']);
    } else {
      this.location.back();
    }
  }
}
