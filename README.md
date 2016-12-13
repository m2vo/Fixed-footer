# fixed-footer

Lorsqu'on ajoute un footer à une page, on s'attend à ce que celui-ci se trouve au bas de la fenêtre.
Or, si le contenu du document est court, on peut se trouver avec un footer au milieu de la fenêtre.

fixed-footer permet de positionner automatiquement et dynamiquement le footer au bas de la fenêtre ou au bas du document sans risque de superposition.
En cas de redimensionnement de la fenêtre fixed-footer recalcule la position du footer.

Si vous êtes amené à modifier dynamiquement le DOM, il vous suffit de terminer la modification par un appel à la fonction fixedFooter() qui repositionnera le footer



When adding a footer to a page, it is expected to be at the bottom of the window. 
If the content of the document is short, you can find the footer in the middle of the window.

Fixed-footer allows the footer to be positioned automatically and dynamically at the bottom of the window or at the bottom of the document without risk of overlap. If the fixed-footer window is resized, the footer position is recalculated.

If you need to dynamically modify the DOM, you just have to finish the modification with a call to the fixedFooter() function which will reposition the footer
