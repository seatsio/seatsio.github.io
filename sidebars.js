module.exports = {
    docs: [
        'index',
        'Getting Started/getting-started-intro',
        {
            "Quick Tutorial": [
                "Getting Started/getting-started-quick-tutorial/tutorial-draw-a-floor-plan",
                "Getting Started/getting-started-quick-tutorial/tutorial-create-an-event",
                "Getting Started/getting-started-quick-tutorial/tutorial-show-the-floor-plan-on-your-page",
                "Getting Started/getting-started-quick-tutorial/tutorial-collect-selected-seats",
                "Getting Started/getting-started-quick-tutorial/tutorial-book-selected-seats",
                "Getting Started/getting-started-quick-tutorial/tutorial-further-reading",
            ]
        },
        // TODO renderer
        {
            "REST API": [
                {
                    "Overview": [
                        "REST API/api-overview/api-authentication",
                        "REST API/api-overview/api-https",
                        "REST API/api-overview/api-gzip",
                        "REST API/api-overview/api-error-handling",
                        "REST API/api-overview/api-pagination",
                        "REST API/api-overview/api-expanding-objects",
                        "REST API/api-overview/api-uri-encoding",
                        "REST API/api-overview/api-client-libraries",
                    ]
                },
                {
                    "Objects": [
                        "REST API/api-objects/api-book-objects",
                        "REST API/api-objects/api-release-objects",
                        "REST API/api-objects/api-temporarily-hold-objects",
                        "REST API/api-objects/api-custom-object-status",
                        "REST API/api-objects/api-general-admission-areas",
                        "REST API/api-objects/api-best-available",
                        "REST API/api-objects/api-season-tickets",
                        "REST API/api-objects/api-extra-data",
                        "REST API/api-objects/api-for-sale-not-for-sale",
                        "REST API/api-objects/api-change-object-status-in-batch",
                    ]
                },
                {
                    "Charts": [
                        "REST API/api-charts/api-list-all-charts",
                        "REST API/api-charts/api-retrieve-a-chart",
                        "REST API/api-charts/api-retrieve-a-chart-version",
                        "REST API/api-charts/api-create-a-chart",
                        "REST API/api-charts/api-update-a-chart",
                        "REST API/api-charts/api-validate-a-chart-version",
                        "REST API/api-charts/api-retrieve-a-chart-thumbnail",
                        "REST API/api-charts/api-retrieve-a-chart-thumbnail",
                        "REST API/api-charts/api-publish-a-draft-version",
                        "REST API/api-charts/api-discard-a-draft-version",
                        "REST API/api-charts/api-list-charts-in-the-archive",
                        "REST API/api-charts/api-move-a-chart-to-the-archive",
                        "REST API/api-charts/api-move-a-chart-out-of-the-archive",
                        "REST API/api-charts/api-copy-a-chart",
                        "REST API/api-charts/api-charts-copy-chart-to-workspace",
                        "REST API/api-charts/api-charts-copy-draft-version",
                        "REST API/api-charts/api-charts-save-social-distancing-rulesets",
                    ]
                },
                // TODO chart tags
                // TODO EVENTS
                // TODO Chart reports
                // TODO Event reports
                // TODO Usage reports
                // TODO Hold TOkens
                // TODO Workspaces
                // TODO Subaccounts
            ]
        },
        {
            "Event Manager": [
                "Event Manager/event-manager-introduction",
                "Event Manager/event-manager-how-to-embed",
                "Event Manager/event-manager-configuring",
                "Event Manager/event-manager-styling",
                "Event Manager/event-manager-reacting-to-events",
            ]
        }
        // TODO Chart Manager
        // TODO Embedded Designer
    ],
};
