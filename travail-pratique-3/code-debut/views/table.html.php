<h5>Données de ventes pour les différentes saveurs de crème glacée</h5>

<table class="table mt-2">
    <thead>
        <tr>
            <th>Saveur</th>
            <th>Quantité vendue</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach($ventes as $vente) { ?>
        <tr>
            <td><?php echo $vente["saveur"]; ?></td>
            <td><?php echo $vente["quantite"]; ?></td>
        </tr>
        <?php } ?>
    </tbody>
</table>
